import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import propToStyle from '../../theme/utils/propToStyle';

const commonProps = {
  flex: propToStyle('margin'),
  margin: propToStyle('margin'),
  padding: propToStyle('padding'),
  paddingTop: propToStyle('paddingTop'),
  background: propToStyle('background'),
  backgroundColor: propToStyle('backgroundColor'),
} as const;

const dynamicProps = {
  ...commonProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

type BoxStyleProps = keyof typeof dynamicProps;
export type BoxPropsBase = Pick<CSSProperties, BoxStyleProps>;
export const Styles = css`
  ${Object.keys(dynamicProps)
    .map((dynamicPropKey: DynamicProps) => dynamicProps[dynamicPropKey])}
`;
