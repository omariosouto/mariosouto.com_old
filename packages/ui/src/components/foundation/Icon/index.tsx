import styled, { css } from 'styled-components';
import { RecordOfThemeBasicSizes } from '../../../theme/types/ThemeBasicSizes';
import { ThemeSpaceNames } from '../../../theme/types/ThemeSpace';
import { iconMapByName } from './iconMapByName';
export { iconMapByName } from './iconMapByName';

export const iconSizes: RecordOfThemeBasicSizes<ThemeSpaceNames> = {
  xs: 'x3',
  sm: 'x4',
  md: 'x6',
  lg: 'x8',
};

const Svg = styled.svg<Partial<IconProps>>`
  ${({ theme, size }) => {
    if (size === 'text') {
      return css`
        width: 1.5ch;
        height: 1.5ch;
      `;
    }
    const spaceBySize = iconSizes[size];
    return css`
      width: ${theme.space[spaceBySize]};
      height: ${theme.space[spaceBySize]};
    `;
  }}
`;

export type IconNames = keyof typeof iconMapByName;
export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'text';
type IconProps = {
  name: IconNames;
  size?: IconSizes;
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
  size: 'md',
};
