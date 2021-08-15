import React from 'react';
import styled from 'styled-components';
import { CSSProperties } from './css/CSSProperties';
import propToStyle from '../../../../theme/utils/propToStyle';

const allPropToStyle = {
  /* Box Model */
  width: propToStyle('width'),
  height: propToStyle('height'),
  display: propToStyle('display'),
  margin: propToStyle('margin'),
  padding: propToStyle('padding'),
  position: propToStyle('position'),
  /* Box Decoration */
  boxShadow: propToStyle('boxShadow'),
  listStyleType: propToStyle('listStyleType'),
  /* Text */
  textAlign: propToStyle('textAlign'),
  /* FlexBox/Grid */
  flex: propToStyle('flex'),
  alignItems: propToStyle('alignItems'),
  justifyContent: propToStyle('justifyContent'),
};

type BoxStyleProps = keyof typeof allPropToStyle;

const StyledBox = styled.div<BoxProps>`
  ${Object.keys(allPropToStyle).map(
    (key: keyof typeof allPropToStyle) => allPropToStyle[key]
  )}
`;

interface BoxPropsBase {
  as: 'div' | 'section' | 'article' | 'ul' | 'header' | 'footer' | 'main';
  children: React.ReactNode;
}
export type BoxProps = BoxPropsBase & Pick<CSSProperties, BoxStyleProps>;

export default function Box({ children, ...props }: BoxProps): JSX.Element {
  return <StyledBox {...props}>{children}</StyledBox>;
}

Box.defaultProps = {
  display: 'flex',
};
