import React from 'react';
import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import propToStyle from '../../theme/utils/propToStyle';

export const commonDynamicProps = {
  // [Common Props]
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
  // [Text Specific Props]
  textColor: propToStyle('color', 'textColor'),
  fontSize: propToStyle('fontSize'),
} as const;
export type CommonDynamicProps = keyof typeof commonDynamicProps;

export function renderDynamicProps(dynamicProps: any) {
  return Object.keys(dynamicProps)
    .map((dynamicPropKey: DynamicProps) => dynamicProps[dynamicPropKey])
}


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

type BoxStyleProps = DynamicProps;
export type BoxPropsBase = { children: React.ReactNode } & Pick<CSSProperties, BoxStyleProps>;
export const Styles = css`
  ${renderDynamicProps(dynamicProps)}
`;
