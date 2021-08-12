import styled, { css } from 'styled-components';
import { iconMapByName } from './iconMapByName';
export { iconMapByName } from './iconMapByName';

export const iconSizes = {
  xs: '4',
  sm: '6',
};

const Svg = styled.svg<Partial<IconProps>>`
  ${({ size }) => (
    console.error(size),
    css`
      /* w-4  // xs
      w-6  // sm */
      width: ${({ theme }) => theme.space[0]};
      height: 50px;
    `
  )}
`;

type IconProps = {
  name: keyof typeof iconMapByName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
  size: 'xs',
};
