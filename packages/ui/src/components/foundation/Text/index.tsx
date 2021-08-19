import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TypographyVariantsName } from '../../../theme/types/ThemeTypography';
import propToStyle from '../../../theme/utils/propToStyle';
import { CSSProperties } from '../layout/Box/css/CSSProperties';

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

const TextBase = styled.span<TextProps>`
  ${propToStyle('textAlign')}
  ${propToStyle('color')}
  ${({ theme, variant, bold, srOnly, uppercase }) =>
    css`
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
  | 'a'
  | 'button';
interface TextPropsBase {
  bold?: boolean;
  variant?: TypographyVariantsName;
  as?: asText;
  children: React.ReactNode;
  className?: string;
  srOnly?: boolean;
  /** Never pass this prop directly, always use Link component instead */
  href?: string;
  uppercase?: boolean;
}
type TextDynamicProps = Pick<CSSProperties, 'textAlign' | 'color'>;
export type TextProps = TextPropsBase & TextDynamicProps;
export default function Text({
  children,
  variant,
  bold,
  as,
  ...props
}: TextProps): JSX.Element {
  return (
    <TextBase as={as} bold={bold} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  variant: 'body_2',
  bold: false,
  as: 'span',
};
