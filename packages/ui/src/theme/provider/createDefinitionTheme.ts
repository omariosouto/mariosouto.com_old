/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IColorPallete } from './@types/IColorPallete';

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
    const currentPrevPath = prevPath
      ? `${prevPath.replace(/^(dark_|light_)/g, '')}_${key}`
      : `${key}`;
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
      return `var(--${target.path}_${key})`;
    }
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reduceVariables = (acc: any, [_, value]: Array<any>) => {
  return [...acc, ...value.reduce(traverseFlat, [])];
};
export function createDefinitionTheme(pallete: IColorPallete) {
  const [light, dark] = createDataStructure(pallete);

  return {
    cssVariables: {
      light: light[1].reduce(reduceVariables, []),
      dark: dark[1].reduce(reduceVariables, []),
    },
    theme: new Proxy(pallete.light, proxyHandler),
  };
}
