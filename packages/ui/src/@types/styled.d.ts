import 'styled-components';

interface Color {
  main: {
    color: string;
    contrastColor: string;
  };
  light?: {
    color: string;
    contrastColor: string;
  };
}

interface ThemeColor {
  background: Color;
  primary: Color;
  secondary?: Color;
}

interface DefaultThemeBase {
  colors: ThemeColor;
}

export const definitionTheme: DefaultTheme = {
  colors: {
    background: {
      main: {
        color: '',
        contrastColor: '',
      },
      light: {
        color: '',
        contrastColor: '',
      },
    },
    primary: {
      main: {
        color: 'var(--colors_primary_main_color)',
        contrastColor: 'var(--colors_primary_main_contrastColor)',
      },
    },
  },
};


declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeBase {}
}
