import React from 'react';
import styled, { css } from 'styled-components';
import { CSSProperties, PropertyDefinition } from './css/CSSProperties';
import propToStyle from '../../../../theme/utils/propToStyle';
import { PatternColorSchemeNames } from '../../../../theme/types/ThemeColors';

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
  ${({ theme, patternFill, bg }) => {
    if (patternFill) {
      return css`
        ${{
          backgroundColor: bg && theme.colors[patternFill].bg,
          color: theme.colors[patternFill].colorContrastBase,
        }}
        --bg: ${theme.colors[patternFill].bg};
        --colorBase: ${theme.colors[patternFill].colorBase};
        --colorContrastBase: ${theme.colors[patternFill].colorContrastBase};
        --colorContrastStrong: ${theme.colors[patternFill].colorContrastStrong};
        --colorContrastLight: ${theme.colors[patternFill].colorContrastLight};
        --colorHighlight: ${theme.colors[patternFill].colorHighlight};
        --colorHighlightStrong: ${theme.colors[patternFill]
          .colorHighlightStrong};
        --colorHighlightLight: ${theme.colors[patternFill].colorHighlightLight};
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
  patternFill?: PatternColorSchemeNames;
  bg?: boolean;
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
  bg: false,
};
