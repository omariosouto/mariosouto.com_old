import { ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { ThemeBasicSizes } from '../../../theme/types/ThemeBasicSizes';
import { ThemeSpaceNames } from '../../../theme/types/ThemeSpace';
import { TypographyVariantsName } from '../../../theme/types/ThemeTypography';
import propToStyle from '../../../theme/utils/propToStyle';
import { PropertyDefinition } from '../../foundation/layout/Box/css/CSSProperties';
import Text from '../../foundation/Text';
import Link from '../Link';

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
    px: 'x8',
    py: 'x3',
    typographyVariant: 'body_2',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const actions: Record<any, any> = {
  primary({ theme, color }: { theme: DefaultTheme } & ButtonProps) {
    return {
      background: theme.colors[color]['600'],
      color: theme.colors.white,
      border: `1px solid ${theme.colors[color]['800']}`,
      '&:hover, &:focus': {
        background: theme.colors[color]['700'],
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.colors.white},
          0 0 0 4px ${theme.colors[color]['500']}`,
      },
    };
  },
  secondary({ theme, color }: { theme: DefaultTheme } & ButtonProps) {
    return {
      background: theme.colors[color]['100'],
      color: theme.colors[color]['700'],
      border: `1px solid ${theme.colors[color]['300']}`,
      '&:hover, &:focus': {
        background: theme.colors[color]['200'],
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.colors.white},
          0 0 0 4px ${theme.colors[color]['500']}`,
      },
    };
  },
  tertiary({ theme, color }: { theme: DefaultTheme } & ButtonProps) {
    return {
      background: 'white',
      color: theme.colors[color]['700'],
      border: `1px solid ${theme.colors.neutral['100']}`,
      '&:hover, &:focus': {
        background: theme.colors.neutral['050'],
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.colors.white},
          0 0 0 4px ${theme.colors[color]['500']}`,
      },
    };
  },
  quartenary({ theme, color }: { theme: DefaultTheme } & ButtonProps) {
    return {
      background: 'transparent',
      color: theme.colors[color]['700'],
      border: `1px solid transparent`,
      '&:hover, &:focus': {
        background: theme.colors.neutral['100'],
        border: `1px solid ${theme.colors.neutral['200']}`,
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.colors.white},
          0 0 0 4px ${theme.colors[color]['500']}`,
      },
    };
  },
};

const StyledButton = styled(Text)<ButtonProps>`
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.375rem;
  outline: 0;

  ${({ theme, size, action }) => {
    const { px, py } = sizeVariants[size];
    return css`
      ${actions[action]}
      padding-top: ${theme.space[py as ThemeSpaceNames]};
      padding-bottom: ${theme.space[py as ThemeSpaceNames]};
      padding-left: ${theme.space[px as ThemeSpaceNames]};
      padding-right: ${theme.space[px as ThemeSpaceNames]};
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
      ${propToStyle('width', 'fullWidth', (active: boolean) =>
        active ? '100%' : ''
      )}
      ${propToStyle('justifyContent', 'fullWidth', (active: boolean) =>
        active ? 'center' : ''
      )}
    `;
  }}
`;

StyledButton.defaultProps = {
  as: 'button',
};

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  action?: 'primary' | 'secondary' | 'tertiary' | 'quartenary';
  color?:
    | 'primary'
    | 'accent'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'neutral';
  size: ThemeBasicSizes;
  fullWidth?: PropertyDefinition<boolean>;
  href?: string;
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Button({
  children,
  type,
  size,
  fullWidth,
  action,
  color,
  href,
  onClick,
}: ButtonProps): JSX.Element {
  const { typographyVariant } = sizeVariants[size];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const as = href ? Link : ('button' as any);

  return (
    <StyledButton
      type={type}
      size={size}
      fullWidth={fullWidth}
      variant={typographyVariant}
      action={action}
      color={color}
      href={href}
      onClick={onClick}
      as={as}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  action: 'primary',
  type: 'button',
  size: 'md',
  color: 'primary',
  fullWidth: false,
};