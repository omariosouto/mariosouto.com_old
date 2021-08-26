import React from 'react';
import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import propToStyle from '../../theme/utils/propToStyle';

const commonProps = {
  flex: propToStyle('flex'),
  margin: propToStyle('margin'),
  marginTop: propToStyle('marginTop'),
  marginBottom: propToStyle('marginBottom'),
  marginLeft: propToStyle('marginLeft'),
  marginRight: propToStyle('marginRight'),
  padding: propToStyle('padding'),
  paddingTop: propToStyle('paddingTop'),
  paddingBottom: propToStyle('paddingBottom'),
  paddingLeft: propToStyle('paddingLeft'),
  paddingRight: propToStyle('paddingRight'),
  background: propToStyle('background'),
  backgroundColor: propToStyle('backgroundColor'),
} as const;

const dynamicProps = {
  ...commonProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

type BoxStyleProps = keyof typeof dynamicProps;
export type BoxPropsBase = { children: React.ReactNode } & Pick<CSSProperties, BoxStyleProps>;
export const Styles = css`
  ${Object.keys(dynamicProps)
    .map((dynamicPropKey: DynamicProps) => dynamicProps[dynamicPropKey])}
`;
