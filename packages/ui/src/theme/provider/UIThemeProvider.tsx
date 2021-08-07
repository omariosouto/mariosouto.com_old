import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { palleteDevSoutinho } from './palletes/palleteDevSoutinho';
import { createDefinitionTheme } from './createDefinitionTheme';

interface CSSColorPalleteItem {
  path: string;
  value: string;
}
interface CSSColorPallete {
  light: CSSColorPalleteItem[];
  dark: CSSColorPalleteItem[];
}
const GlobalStyle = createGlobalStyle<{ cssVariables: CSSColorPallete }>`
  * {
    box-sizing: border-box;
  }

  :root {
    ${({ cssVariables }) => cssVariables.light
    .map(({ path, value }) => `--${path}: ${value};`)
    .join('')}
  }
  .dark { 
      ${({ cssVariables }) => cssVariables.dark
    .map(({ path, value }) => `--${path}: ${value};`)
    .join('')}
  }
`;

export default function UIThemeProvider({ children }) {
  const { cssVariables, theme } = createDefinitionTheme(palleteDevSoutinho);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle cssVariables={cssVariables} />
      {children}
    </ThemeProvider>
  );
}
