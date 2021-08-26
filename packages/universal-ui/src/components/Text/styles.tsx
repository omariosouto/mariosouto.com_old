import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

type TextStyleProps = DynamicProps;
export type TextPropsBase = { children: React.ReactNode } & Pick<CSSProperties, TextStyleProps>;
export const Styles = css`
  ${renderDynamicProps(commonDynamicProps)}
`;
