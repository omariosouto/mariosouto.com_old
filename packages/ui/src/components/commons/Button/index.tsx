import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ThemeBasicSizes } from '../../../theme/types/ThemeBasicSizes';
import { ThemeSpaceNames } from '../../../theme/types/ThemeSpace';
import { TypographyVariantsName } from '../../../theme/types/ThemeTypography';
import Text from '../../foundation/Text';

type SizeVariant = Record<
  'px' | 'py',
  ThemeSpaceNames | TypographyVariantsName
>;
type TypographyVariant = Record<'typographyVariant', TypographyVariantsName>;
const sizeVariants: Record<ThemeBasicSizes, TypographyVariant & SizeVariant> = {
  xs: {
    px: 'x2.5',
    py: 'x1.5',
    typographyVariant: 'body_4',
  },
  sm: {
    px: 'x3',
    py: 'x2',
    typographyVariant: 'body_3',
  },
  md: {
    px: 'x4',
    py: 'x2',
    typographyVariant: 'body_3',
  },
  lg: {
    px: 'x4',
    py: 'x2',
    typographyVariant: 'body_2',
  },
  xl: {
    px: 'x6',
    py: 'x3',
    typographyVariant: 'body_2',
  },
};

const StyledButton = styled(Text)<ButtonProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: red;
  ${({ theme, size, fullWidth }) => {
    const { px, py } = sizeVariants[size];
    return css`
      padding-top: ${theme.space[py as ThemeSpaceNames]};
      padding-bottom: ${theme.space[py as ThemeSpaceNames]};
      padding-left: ${theme.space[px as ThemeSpaceNames]};
      padding-right: ${theme.space[px as ThemeSpaceNames]};
      ${fullWidth && 'width: 100%;'};
    `;
  }}
`;

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  size: ThemeBasicSizes;
  fullWidth?: boolean;
}
export default function Button({
  children,
  type,
  size,
  fullWidth,
}: ButtonProps): JSX.Element {
  const { typographyVariant } = sizeVariants[size];

  return (
    <StyledButton
      type={type}
      size={size}
      fullWidth={fullWidth}
      variant={typographyVariant}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  size: 'md',
  fullWidth: false,
};
