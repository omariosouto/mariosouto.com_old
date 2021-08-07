import { IColorPallete } from './@types/IColorPallete';


function traverseFlat(acc, arr, i) {
  const [, value, path] = arr;

  if (Array.isArray(value)) {
    return [
      ...acc,
      ...value.reduce(traverseFlat, [])
    ];
  }

  if (typeof value === 'string') {
    return [
      ...acc,
      {
        path,
        value,
      }
    ];
  }

  return [];
}

function createDataStructure(currentValue, prevPath = '') {
  if (typeof currentValue === 'string') return currentValue
  if (typeof currentValue === 'number') return currentValue
  if (typeof currentValue === 'boolean') return currentValue

  const result = Object
    .keys(currentValue)
    .map((key) => {
      const currentPrevPath = prevPath ? `${prevPath.replace(/^(dark_|light_)/g,'')}_${key}` : `${key}`;
      return [
        key,
        createDataStructure(currentValue[key], currentPrevPath),
        currentPrevPath,
      ]
    });
  return result;
}

const proxyHandler = {
  get: (target, key) => {
      if(typeof target[key] === 'object' && target[key] !== null) {
          return new Proxy({
              target: target[key],
              path: key,
          }, proxyHandler)
      }
      if (typeof target.target[key] === 'object' && target.target[key] !== null) {
          return new Proxy({
              target: target.target[key],
              path: `${target.path}_${key}`,
          }, proxyHandler)
      } else {
          return `var(--${target.path}_${key})`;
      }
  },
}

const reduceVariables = (acc, [_, value]) => {
  return [
    ...acc,
    ...value.reduce(traverseFlat, [])
  ]
};
export function createDefinitionTheme(pallete: IColorPallete) {
  const [light, dark] = createDataStructure(pallete);
  
  return {
    cssVariables: {
      light: light[1].reduce(reduceVariables, []),
      dark: dark[1].reduce(reduceVariables, []),
    },
    theme: new Proxy(pallete.light, proxyHandler),
  }
}
