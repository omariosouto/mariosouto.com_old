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

declare module 'styled-components' {
  export interface DefaultThemeBase {
    colors: ThemeColor;
  }
}
