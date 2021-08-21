export const colorSetKeys = [
  '050',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;

export type ColorSetKeys = typeof colorSetKeys[number];
export type ColorDeck = Record<ColorSetKeys, string>;

export interface ColorPallete {
  neutral: ColorDeck;
  primary: ColorDeck;
  accent: ColorDeck;
  positive: ColorDeck;
  negative: ColorDeck;
  warning: ColorDeck;
}
