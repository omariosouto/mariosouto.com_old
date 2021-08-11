/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ cssVariables: any }>`
  * {
    box-sizing: border-box;
  }

  ${({ cssVariables: { colorsLight, colorsDark, ...otherValues } }) => {
    return css`
      :root {
        ${colorsLight
          .map(
            ({ path, value }: any) =>
              `--${path.replace('colorsLight', 'colors')}: ${value};`
          )
          .join('')}
        ${Object.keys(otherValues)
          .flatMap((key: any) => {
            return otherValues[key];
          })
          .map(({ path, value }: any) => `--${path}: ${value};`)
          .join('')}
      }
      .dark {
        ${colorsDark
          .map(
            ({ path, value }: any) =>
              `--${path.replace('colorsDark', 'colors')}: ${value};`
          )
          .join('')}
      }
    `;
  }}

`;
