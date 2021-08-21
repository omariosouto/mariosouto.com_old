export type ComponentColorSchemeNames =
  | 'primary'
  | 'accent'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'neutral';

export type PatternColorSchemeNames =
  | 'fillPrimary'
  | 'fillAccent'
  | 'fillPositive'
  | 'fillNegative'
  | 'fillWarning'
  | 'fillBase'
  | 'fillBaseReverse';

export const patternColorSchemeNames: PatternColorSchemeNames[] = [
  'fillBase',
  'fillPrimary',
  'fillAccent',
  'fillPositive',
  'fillNegative',
  'fillWarning',
  'fillBaseReverse',
];

export type ButtonColors = Record<
  ComponentColorSchemeNames,
  {
    focusFeedback: string;
    darkColor: string;
    darkColorContrastText: string;
    lightColor: string;
    lightColorContrastText: string;
    focus: {
      darkColor: string;
      darkColorContrastText: string;
      lightColor: string;
      lightColorContrastText: string;
    };
  }
>;

export interface PatternColors {
  bg: string;
  colorBase: string;
  colorContrastBase: string;
  colorContrastStrong: string;
  colorContrastLight: string;
  colorHighlight: string;
  colorHighlightStrong: string;
  colorHighlightLight: string;
}

export interface ThemeColors {
  white: string;
  black: string;
  button: ButtonColors;
  fillPrimary: PatternColors;
  fillAccent: PatternColors;
  fillPositive: PatternColors;
  fillNegative: PatternColors;
  fillWarning: PatternColors;
  fillBase: PatternColors;
  fillBaseReverse: PatternColors;
}
