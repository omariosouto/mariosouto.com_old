import React from 'react';
import styled from 'styled-components';
import { CSSProperties } from './css/CSSProperties';
import propToStyle from '../../../../theme/utils/propToStyle';

const allPropToStyle = {
  color: propToStyle('color'),
  background: propToStyle('background'),
  backgroundColor: propToStyle('backgroundColor'),
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

type BoxTags =
  | 'div'
  | 'section'
  | 'article'
  | 'ul'
  | 'header'
  | 'footer'
  | 'main'
  | 'dl'
  | 'dt'
  | 'dd'
  | 'li'
  | 'p'
  | 'span';

interface BoxPropsBase {
  children: React.ReactNode;
  as?: BoxTags;
  tag?: BoxTags;
}
export type BoxProps = BoxPropsBase & Pick<CSSProperties, BoxStyleProps>;

export default function Box({
  children,
  color,
  ...props
}: BoxProps): JSX.Element {
  return (
    <StyledBox color={color} as={props.as || props.tag} {...props}>
      {children}
    </StyledBox>
  );
}

Box.defaultProps = {
  display: 'block',
  as: 'div',
};
