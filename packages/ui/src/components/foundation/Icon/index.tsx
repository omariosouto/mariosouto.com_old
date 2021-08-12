import styled, { css } from 'styled-components';
import { iconMapByName } from './iconMapByName';
export { iconMapByName } from './iconMapByName';

// TODO: Move basic sizes to a type (xs, sm, md, lg, xl)
// TODO: Refactor this
export const iconSizes: Record<'xs' | 'sm', 'x1' | 'x2'> = {
  xs: 'x1',
  sm: 'x2',
};

const Svg = styled.svg<Partial<IconProps>>`
  ${({ theme, size }) =>
    css`
      width: ${theme.space[iconSizes[size]]};
      height: ${theme.space[iconSizes[size]]};
    `}
`;

type IconProps = {
  name: keyof typeof iconMapByName;
  size?: 'xs' | 'sm' /* | 'md' | 'lg' | 'xl' */;
};

export default function Icon({ name, size, ...props }: IconProps): JSX.Element {
  const iconName = name || 'default';
  const CurrentIcon = iconMapByName[iconName];
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      size={size}
    >
      <CurrentIcon />
    </Svg>
  );
}

Icon.defaultProps = {
  size: 'sm',
};
