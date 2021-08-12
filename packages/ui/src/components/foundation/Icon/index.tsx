import styled, { css } from 'styled-components';
import { RecordOfThemeBasicSizes } from '../../../theme/types/ThemeBasicSizes';
import { ThemeSpaceNames } from '../../../theme/types/ThemeSpace';
import { iconMapByName } from './iconMapByName';
export { iconMapByName } from './iconMapByName';

export const iconSizes: RecordOfThemeBasicSizes<ThemeSpaceNames> = {
  xs: 'x4',
  sm: 'x6',
};

const Svg = styled.svg<Partial<IconProps>>`
  ${({ theme, size }) => {
    const spaceBySize = iconSizes[size];
    return css`
      width: ${theme.space[spaceBySize]};
      height: ${theme.space[spaceBySize]};
    `;
  }}
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
