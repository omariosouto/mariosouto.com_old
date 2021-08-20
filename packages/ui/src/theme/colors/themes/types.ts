export interface ColorSet {
  '050': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

export type ColorPalleteColorSetNames =
  | 'primary'
  | 'accent'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'neutral';

export interface ColorPallete {
  white: string;
  black: string;
  defaultBackground: string;
  defaultTextColor: string;
  neutral: ColorSet;
  primary: ColorSet;
  accent: ColorSet;
  positive: ColorSet;
  negative: ColorSet;
  warning: ColorSet;
}
