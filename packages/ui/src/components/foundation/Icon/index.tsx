import styled, { css } from 'styled-components';
import { RecordOfThemeBasicSizes } from '../../../theme/types/ThemeBasicSizes';
import { ThemeSpaceNames } from '../../../theme/types/ThemeSpace';
import propToStyle from '../../../theme/utils/propToStyle';
import { PropertyDefinition } from '../layout/Box/css/CSSProperties';
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
`;

export type IconNames = keyof typeof iconMapByName;
export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'text';
type IconProps = {
  name: IconNames;
  size?: IconSizes;
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
};

export default function Icon({
  name,
  size,
  color,
  ...props
}: IconProps): JSX.Element {
  const iconName = name || 'default';
  const CurrentIcon = iconMapByName[iconName];
  return (
    <Svg
      {...props}
      color={color as string}
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
