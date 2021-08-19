import React from 'react';
import styled, { css } from 'styled-components';
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
  ${({ theme, colorTheme }) => {
    if (colorTheme) {
      return css`
        ${{
          backgroundColor: theme.colors[colorTheme].bg,
        }}
        --bg: ${theme.colors[colorTheme].bg};
        --colorContrast: ${theme.colors[colorTheme].colorContrast};
        --colorContrastStrong: ${theme.colors[colorTheme].colorContrastStrong};
        --colorContrastLight: ${theme.colors[colorTheme].colorContrastLight};
        --colorHighlight: ${theme.colors[colorTheme].colorHighlight};
        --colorHighlightStrong: ${theme.colors[colorTheme]
          .colorHighlightStrong};
        --colorHighlightLight: ${theme.colors[colorTheme].colorHighlightLight};
      `;
    }
  }}
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
  as?: BoxTags;
  tag?: BoxTags;
  className?: string;
  children?: React.ReactNode;
  colorTheme?: 'fillBase' | 'fillBaseReverse';
}
type BoxPropsExtensions = {
  mx?: PropertyDefinition<string>;
  my?: PropertyDefinition<string>;
  px?: PropertyDefinition<string>;
  py?: PropertyDefinition<string>;
};
export type BoxProps = BoxPropsBase &
  Pick<CSSProperties & BoxPropsExtensions, BoxStyleProps> & { role?: string };

export default function Box({ children, ...props }: BoxProps): JSX.Element {
  return (
    <StyledBox as={props.as || props.tag} {...props}>
      {children}
    </StyledBox>
  );
}

Box.defaultProps = {
  display: 'block',
  colorTheme: '',
};
