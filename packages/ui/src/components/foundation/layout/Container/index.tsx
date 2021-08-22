import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { BreakpointNames } from '../../../../theme/types/ThemeBreakpoints';
import { ThemeSpaceNames } from '../../../../theme/types/ThemeSpace';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

function handlePadded(
  padded: Padded,
  theme: DefaultTheme,
  breakpointName: BreakpointNames
): string {
  const sizes: Record<BreakpointNames, ThemeSpaceNames> = {
    xs: 'x4',
    sm: 'x6',
    md: 'x6',
    lg: 'x8',
    xl: 'x8',
  };
  const paddingValue = `0 ${theme.space[sizes[breakpointName]]}`;

  if (padded && typeof padded === 'object') {
    return padded[breakpointName] ? `padding: ${paddingValue};` : '';
  }

  if (padded && typeof padded === 'boolean') {
    return `padding: ${paddingValue};`;
  }

  return '';
}

const ContainerWrapper = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: 100%;
  ${({ theme, padded, fullWidth }) =>
    breakpointsMedia({
      xs: css`
        ${handlePadded(padded, theme, 'xs')}
      `,
      sm: css`
        ${fullWidth ? 'width: 100%;' : `width: ${theme.space.xcontainer_sm};`}
        ${handlePadded(padded, theme, 'sm')}
      `,
      md: css`
        ${fullWidth ? 'width: 100%;' : `width: ${theme.space.xcontainer_md};`}
        ${handlePadded(padded, theme, 'md')}
      `,
      lg: css`
        ${fullWidth ? 'width: 100%;' : `width: ${theme.space.xcontainer_lg};`}
        ${handlePadded(padded, theme, 'lg')}
      `,
      xl: css`
        ${fullWidth ? 'width: 100%;' : `width: ${theme.space.xcontainer_xl};`}
        ${handlePadded(padded, theme, 'lg')}
      `,
    })}
`;

type Padded = Partial<Record<BreakpointNames, boolean>> | boolean;
interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  padded?: Padded;
  className?: string;
}
export default function Container(props: ContainerProps): JSX.Element {
  return <ContainerWrapper {...props} />;
}

<Container padded={{ xs: true }} />;

Container.defaultProps = {
  className: '',
  children: null,
  padded: true,
  fullWidth: false,
};
