import { DefaultTheme } from 'styled-components';
import { ThemeSpace } from '../../types/ThemeSpace';

const parseStrategies = {
  background: (value: string): string => value,
  default: (value: string, theme: DefaultTheme) => {
    const MATCH_THEME_SPACE = /(x[\d.]+)/g;
    return value.replace(MATCH_THEME_SPACE, (...args) => {
      const currentValue = args[0] as keyof ThemeSpace;
      return `${theme.space[currentValue]}`;
    });
  },
};

type parserName = keyof typeof parseStrategies;

export function parseValue(
  theme: DefaultTheme,
  propName: string,
  propValue: unknown
): string {
  const value = `${propValue}`;
  const paserName = propName as parserName;
  const parser = parseStrategies[paserName] || parseStrategies.default;
  return parser(value, theme);
}
