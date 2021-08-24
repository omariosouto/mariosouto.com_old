/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, createGlobalStyle } from 'styled-components';
import { Preflight } from './Preflight';

export const GlobalStyle = createGlobalStyle<{ cssVariables: any }>`
  ${Preflight}

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
          .map(({ path, value }: any) => {
            if (path.includes('.') || path.includes('/')) {
              return `--${path
                .replace('.', '__')
                .replace('/', '___')}: ${value};`;
            }
            return `--${path}: ${value};`;
          })
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

      /* NextJS Reset */
      body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif,
          ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial,
          Noto Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
          Noto Color Emoji;
      }
      #__next {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      /* Defaults */
      body {
        background-color: ${({ theme }) => theme.colors.white};
      }
      body.dark {
        background-color: ${({ theme }) => theme.colors.neutral['900']};
      }
    `;
  }}

`;
