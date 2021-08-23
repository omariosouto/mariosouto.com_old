import React from 'react';
import styled from 'styled-components';
import { CSSProperties, PropertyDefinition } from './css/CSSProperties';
import propToStyle from '../../../../theme/utils/propToStyle';

const allPropToStyle = {
  color: propToStyle('color', 'colorProp'),
  background: propToStyle('background'),
  backgroundColor: propToStyle('backgroundColor'),
  /* Box Model */
  width: propToStyle('width'),
  maxWidth: propToStyle('maxWidth'),
  height: propToStyle('height'),
  border: propToStyle('border'),
  display: propToStyle('display'),
  margin: propToStyle('margin'),
  marginTop: propToStyle('marginTop'),
  marginLeft: propToStyle('marginLeft'),
  marginRight: propToStyle('marginRight'),
  mx: [propToStyle('marginLeft', 'mx'), propToStyle('marginRight', 'mx')],
  my: [propToStyle('marginTop', 'my'), propToStyle('marginBottom', 'my')],
  padding: propToStyle('padding'),
  paddingRight: propToStyle('paddingRight'),
  paddingLeft: propToStyle('paddingLeft'),
  px: [propToStyle('paddingLeft', 'px'), propToStyle('paddingRight', 'px')],
  py: [propToStyle('paddingTop', 'py'), propToStyle('paddingBottom', 'py')],
  position: propToStyle('position'),
  overflow: propToStyle('overflow'),
  /* Box Decoration */
  boxShadow: propToStyle('boxShadow'),
  listStyleType: propToStyle('listStyleType'),
  /* Text */
  textAlign: propToStyle('textAlign'),
  verticalAlign: propToStyle('verticalAlign'),
  /* FlexBox/Grid */
  flex: propToStyle('flex'),
  flexDirection: propToStyle('flexDirection'),
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
  children?: React.ReactNode;
  as?: BoxTags;
  tag?: BoxTags;
  colorProp?: PropertyDefinition<string>;
  className?: string;
}
type BoxPropsExtensions = {
  mx?: PropertyDefinition<string>;
  my?: PropertyDefinition<string>;
  px?: PropertyDefinition<string>;
  py?: PropertyDefinition<string>;
};
export type BoxProps = BoxPropsBase &
  Pick<CSSProperties & BoxPropsExtensions, BoxStyleProps>;

export default function Box({
  children,
  color,
  ...props
}: BoxProps): JSX.Element {
  return (
    <StyledBox colorProp={color} as={props.as || props.tag} {...props}>
      {children}
    </StyledBox>
  );
}

Box.defaultProps = {
  display: 'block',
  as: 'div',
};
