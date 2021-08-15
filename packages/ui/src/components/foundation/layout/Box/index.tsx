import React from 'react';
import styled from 'styled-components';
import { CSSProperties, PropertyDefinition } from './css/CSSProperties';
import propToStyle from '../../../../theme/utils/propToStyle';

const allPropToStyle = {
  /* Box Model */
  width: propToStyle('width'),
  height: propToStyle('height'),
  display: propToStyle('display'),
  margin: propToStyle('margin'),
  marginTop: propToStyle('marginTop'),
  marginLeft: propToStyle('marginLeft'),
  mx: [propToStyle('marginLeft', 'mx'), propToStyle('marginRight', 'mx')],
  my: [propToStyle('marginTop', 'my'), propToStyle('marginBottom', 'my')],
  padding: propToStyle('padding'),
  px: [propToStyle('paddingLeft', 'px'), propToStyle('paddingRight', 'px')],
  py: [propToStyle('paddingTop', 'py'), propToStyle('paddingBottom', 'py')],
  position: propToStyle('position'),
  /* Box Decoration */
  boxShadow: propToStyle('boxShadow'),
  listStyleType: propToStyle('listStyleType'),
  /* Text */
  textAlign: propToStyle('textAlign'),
  verticalAlign: propToStyle('verticalAlign'),
  /* FlexBox/Grid */
  flex: propToStyle('flex'),
  order: propToStyle('order'),
  alignItems: propToStyle('alignItems'),
  justifyContent: propToStyle('justifyContent'),
};

type BoxStyleProps = keyof typeof allPropToStyle;

const StyledBox = styled.div<BoxProps>`
  ${Object.keys(allPropToStyle).flatMap(
    (key: keyof typeof allPropToStyle) => allPropToStyle[key]
  )}
`;

interface BoxPropsBase {
  as?: 'div' | 'section' | 'article' | 'ul' | 'header' | 'footer' | 'main';
  className?: string;
  children: React.ReactNode;
}
type BoxPropsExtensions = {
  mx?: PropertyDefinition<string>;
  my?: PropertyDefinition<string>;
  px?: PropertyDefinition<string>;
  py?: PropertyDefinition<string>;
};
export type BoxProps = BoxPropsBase &
  Pick<CSSProperties & BoxPropsExtensions, BoxStyleProps>;

export default function Box({ children, ...props }: BoxProps): JSX.Element {
  return <StyledBox {...props}>{children}</StyledBox>;
}

Box.defaultProps = {
  display: 'block',
};
