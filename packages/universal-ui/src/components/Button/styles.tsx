import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export type ButtonPropsBase = { children: React.ReactNode; } & Pick<CSSProperties, DynamicProps>;

export const defaultProps = {};

export const Styles = css<ButtonPropsBase>`
  ${({}) => css`
    background-color: red;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  `}
  ${renderDynamicProps(commonDynamicProps)}
  `;
