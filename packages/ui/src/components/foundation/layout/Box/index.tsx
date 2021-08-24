import React from 'react';
import styled from 'styled-components';
import { CSSProperties, PropertyDefinition } from './css/CSSProperties';
import propToStyle from '../../../../theme/utils/propToStyle';

const borderRadiusDefinitions = {
  none: '0',
  sm: '.125rem',
  md: '.25rem',
  lg: '.5rem',
  full: '9999px',
};

const allPropToStyle = {
  color: propToStyle('color', 'colorProp'),
  background: propToStyle('background'),
  backgroundColor: propToStyle('backgroundColor'),
  borderRadius: propToStyle(
    'borderRadius',
    'borderRadius',
    (key: keyof typeof borderRadiusDefinitions) => borderRadiusDefinitions[key]
  ),
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
  paddingTop: propToStyle('paddingTop'),
  paddingBottom: propToStyle('paddingBottom'),
  paddingRight: propToStyle('paddingRight'),
  paddingLeft: propToStyle('paddingLeft'),
  px: [propToStyle('paddingLeft', 'px'), propToStyle('paddingRight', 'px')],
  py: [propToStyle('paddingTop', 'py'), propToStyle('paddingBottom', 'py')],
  position: propToStyle('position'),
  top: propToStyle('top'),
  left: propToStyle('left'),
  right: propToStyle('right'),
  bottom: propToStyle('bottom'),
  overflow: propToStyle('overflow'),
  transform: propToStyle('transform'),
  opacity: propToStyle('opacity'),
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
  // SVG
  fill: propToStyle('fill'),
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
  | 'span'
  | 'svg'
  | 'rect';

interface BoxPropsBase {
  children?: React.ReactNode;
  as?: BoxTags;
  tag?: BoxTags;
  colorProp?: PropertyDefinition<string>;
  className?: string;
  viewBox?: string;
  y?: number;
  x?: number;
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
