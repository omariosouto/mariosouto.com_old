import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/breakpointsMedia';
import { TypographyVariantsName } from '../../../theme/types/ThemeTypography';

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
  ${({ theme, variant, bold }) =>
    css`
      font-size: ${theme.typography[variant].xs.fontSize};
      line-height: ${theme.typography[variant].xs.lineHeight};
      letter-spacing: ${theme.typography[variant].xs.letterSpacing};
      font-weight: ${fontWeightHandler(
        bold,
        variant,
        theme.typography[variant].xs.fontWeight
      )};

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

type asText = 'span' | 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface TextProps {
  bold: boolean;
  variant: TypographyVariantsName;
  as: asText;
  children: React.ReactNode;
}
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
