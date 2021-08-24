import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TypographyVariantsName } from '../../../theme/types/ThemeTypography';
import propToStyle from '../../../theme/utils/propToStyle';
import {
  CSSProperties,
  PropertyDefinition,
} from '../layout/Box/css/CSSProperties';

function fontWeightHandler(bold: boolean, variant: string, fontWeight: string) {
  const boldVariants = {
    semibold: '600',
    extrabold: '800',
  };
  if (variant.includes('display') || variant.includes('heading')) {
    return bold ? boldVariants.extrabold : fontWeight;
  }

  return bold ? boldVariants.semibold : fontWeight;
}

const TextBase = styled.span<
  TextProps & { ref?: React.ForwardedRef<HTMLAnchorElement> }
>`
  ${({ theme, variant, bold, uppercase, srOnly }) =>
    css`
      ${propToStyle('textAlign')}
      ${propToStyle('color')}
      font-size: ${theme.typography[variant].xs.fontSize};
      line-height: ${theme.typography[variant].xs.lineHeight};
      letter-spacing: ${theme.typography[variant].xs.letterSpacing};
      font-weight: ${fontWeightHandler(
        bold,
        variant,
        theme.typography[variant].xs.fontWeight
      )};
      ${uppercase && `text-transform: uppercase;`}
      ${srOnly &&
      css`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      `}
      ${breakpointsMedia({
        md: css`
          font-size: ${theme.typography[variant].md.fontSize};
          font-weight: ${fontWeightHandler(
            bold,
            variant,
            theme.typography[variant].md.fontWeight
          )};
          line-height: ${theme.typography[variant].md.lineHeight};
          letter-spacing: ${theme.typography[variant].md.letterSpacing};
        `,
      })}
      ${propToStyle('display')}
      ${propToStyle('maxWidth')}
      ${propToStyle('color')}
      ${propToStyle('padding')}
      ${propToStyle('paddingTop')}
      ${propToStyle('paddingLeft')}
      ${propToStyle('paddingRight')}
      ${propToStyle('paddingBottom')}
      ${propToStyle('margin')}
      ${propToStyle('marginTop')}
      ${propToStyle('marginLeft')}
      ${propToStyle('marginRight')}
      ${propToStyle('marginBottom')}
    `}
`;

type asText =
  | 'span'
  | 'p'
  | 'li'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'button'
  | 'a';
interface TextPropsBase {
  bold?: boolean;
  variant?: TypographyVariantsName;
  as?: asText;
  tag?: 'button' | 'a';
  children: React.ReactNode;
  uppercase?: string;
  srOnly?: boolean;
  className?: string;
  href?: string;
  maxWidth?: PropertyDefinition<string>;
  color?: PropertyDefinition<string>;
  padding?: PropertyDefinition<string>;
  paddingTop?: PropertyDefinition<string>;
  paddingLeft?: PropertyDefinition<string>;
  paddingRight?: PropertyDefinition<string>;
  paddingBottom?: PropertyDefinition<string>;
  margin?: PropertyDefinition<string>;
  marginTop?: PropertyDefinition<string>;
  marginLeft?: PropertyDefinition<string>;
  marginRight?: PropertyDefinition<string>;
  marginBottom?: PropertyDefinition<string>;
}
type TextDynamicProps = Pick<CSSProperties, 'textAlign' | 'display'>;
export type TextProps = TextPropsBase & TextDynamicProps;
const Text = React.forwardRef<HTMLAnchorElement, TextProps>(
  ({ children, variant, bold, as, tag, color, ...props }, ref): JSX.Element => {
    return (
      <TextBase
        as={tag || as}
        bold={bold}
        variant={variant}
        color={color as string}
        {...props}
        ref={ref}
      >
        {children}
      </TextBase>
    );
  }
);

Text.defaultProps = {
  bold: false,
  variant: 'body_2',
  as: 'span',
};

export default Text;
