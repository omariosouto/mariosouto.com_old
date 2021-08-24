/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DefaultTheme } from 'styled-components';
import { Theme } from '../createTheme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function traverseFlat(acc: any, arr: any) {
  const [, value, path] = arr;

  if (Array.isArray(value)) {
    return [...acc, ...value.reduce(traverseFlat, [])];
  }

  if (typeof value === 'string') {
    return [
      ...acc,
      {
        path,
        value,
      },
    ];
  }

  return [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createDataStructure(currentValue: any, prevPath = ''): any {
  if (typeof currentValue === 'string') return currentValue;
  if (typeof currentValue === 'number') return currentValue;
  if (typeof currentValue === 'boolean') return currentValue;

  const result = Object.keys(currentValue).map((key) => {
    const currentPrevPath = prevPath ? `${prevPath}_${key}` : `${key}`;
    return [
      key,
      createDataStructure(currentValue[key], currentPrevPath),
      currentPrevPath,
    ];
  });
  return result;
}

const proxyHandler = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get: (target: any, key: any): any => {
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(
        {
          target: target[key],
          path: key,
        },
        proxyHandler
      );
    }
    if (typeof target.target[key] === 'object' && target.target[key] !== null) {
      return new Proxy(
        {
          target: target.target[key],
          path: `${target.path}_${key}`,
        },
        proxyHandler
      );
    } else {
      if (target.path.includes('breakpoints')) {
        return target.target[key];
      }
      if (target.path.includes('space')) {
        const result = `var(--${target.path}_${key
          .replace('.', '__')
          .replace('/', '___')})`;
        return result;
      }
      return `var(--${target.path}_${key})`;
    }
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reduceVariables = (acc: any, [_, value, path]: Array<any>) => {
  if (value.reduce) return [...acc, ...value.reduce(traverseFlat, [])];

  return [
    ...acc,
    {
      path,
      value,
    },
  ];
};
export function createThemeDefinitions({
  colorsDark,
  colorsLight,
  ...theme
}: Theme) {
  // TODO: Refactor this to a more performatic approach
  const cssVariables = createDataStructure({
    ...theme,
    colorsLight,
    colorsDark,
  }).reduce((acc: any, item: any) => {
    return {
      ...acc,
      [item[0]]: item[1].reduce(reduceVariables, []),
    };
  }, {});

  const appTheme: DefaultTheme = {
    ...theme,
    colors: colorsLight,
  };

  return {
    cssVariables,
    theme: new Proxy<DefaultTheme>(appTheme, proxyHandler),
  };
}
