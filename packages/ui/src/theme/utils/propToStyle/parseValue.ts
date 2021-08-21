/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultTheme } from 'styled-components';
import { ThemeSpace } from '../../types/ThemeSpace';

function themeColor(value: string, theme: DefaultTheme) {
  const MATCH_THEME_COLORS =
    /((primary|accent|neutral|positive|negative|warning)[\d.]+)/g;
  return value.replace(MATCH_THEME_COLORS, (...args) => {
    const colorName = args[2] as any;
    const colorNumber = args[0].replace(colorName, '') as any;
    return theme.colors[colorName][colorNumber];
  });
}

const parseStrategies = {
  color: themeColor,
  background: themeColor,
  backgroundColor: themeColor,
  default: (value: string, theme: DefaultTheme) => {
    const MATCH_THEME_SPACE = /(x[\d/.]+)/g;
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
