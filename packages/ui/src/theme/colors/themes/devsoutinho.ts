interface ColorSet {
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
  modes?: Record<string, ColorPallete>;
}

// Current Definitions: https://github.com/omariosouto/devsoutinho-gallery/blob/main/src/theme/globals.css
const devsoutinhoPalleteDefault: ColorPallete = {
  white: 'white',
  black: 'black',
  defaultBackground: 'white',
  defaultTextColor: 'black',
  neutral: {
    // grey
    '050': '#F7F7F7',
    '100': '#E1E1E1',
    '200': '#CFCFCF',
    '300': '#B1B1B1',
    '400': '#9E9E9E',
    '500': '#7E7E7E',
    '600': '#626262',
    '700': '#515151',
    '800': '#3B3B3B',
    '900': '#222222',
  },
  primary: {
    // red
    '050': '#FFEEEE',
    '100': '#FACDCD',
    '200': '#F29B9B',
    '300': '#E66A6A',
    '400': '#D64545',
    '500': '#BA2525',
    '600': '#A61B1B',
    '700': '#911111',
    '800': '#780A0A',
    '900': '#610404',
  },
  accent: {
    // yellow vivid
    '050': '#FFFBEA',
    '100': '#FFF3C4',
    '200': '#FCE588',
    '300': '#FADB5F',
    '400': '#F7C948',
    '500': '#F0B429',
    '600': '#DE911D',
    '700': '#CB6E17',
    '800': '#B44D12',
    '900': '#8D2B0B',
  },
  positive: {
    // lime green
    '050': '#F2FDE0',
    '100': '#E2F7C2',
    '200': '#C7EA8F',
    '300': '#ABDB5E',
    '400': '#94C843',
    '500': '#7BB026',
    '600': '#63921A',
    '700': '#507712',
    '800': '#42600C',
    '900': '#2B4005',
  },
  negative: {
    // pink vivid
    '050': '#FFE3EC',
    '100': '#FFB8D2',
    '200': '#FF8CBA',
    '300': '#F364A2',
    '400': '#E8368F',
    '500': '#DA127D',
    '600': '#BC0A6F',
    '700': '#A30664',
    '800': '#870557',
    '900': '#620042',
  },
  warning: {
    // orange
    '050': '#FFEFE6',
    '100': '#FFD3BA',
    '200': '#FAB38B',
    '300': '#EF8E58',
    '400': '#E67635',
    '500': '#C65D21',
    '600': '#AB4E19',
    '700': '#8C3D10',
    '800': '#77340D',
    '900': '#572508',
  },
};

const devsoutinhoPalleteDark = {
  ...devsoutinhoPalleteDefault,
  white: 'white',
  black: 'black',
  defaultBackground: 'black',
  defaultTextColor: 'white',
};

export const devsoutinhoPalletes: ColorPallete = {
  ...devsoutinhoPalleteDefault,
  modes: {
    dark: devsoutinhoPalleteDark,
  },
};

export const theme = {
  // [???]
  // fillBaseReverse: {},
  fillBase: {
    bg: '',
    colorContrast: '',
    colorContrastStrong: '',
    colorContrastLight: '',
    colorHighlight: '',
    colorHighlightStrong: '',
    colorHighlightLight: '',
  },
  fillPrimary: {},
  fillAccent: {},
  fillPositive: {},
  fillWarning: {},
  fillNegative: {},
};
