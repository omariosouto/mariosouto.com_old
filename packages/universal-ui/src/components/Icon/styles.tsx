import { css } from 'styled-components';
import { SpaceThemeNames } from '../../theme/foundation/space';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { RecordOfThemeBasicSizes } from '../../theme/types/ThemeBasicSizes';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';
import { iconMapByName } from './iconMapByName';

export const iconSizes: RecordOfThemeBasicSizes<SpaceThemeNames> = {
  xs: 'x3',
  sm: 'x4',
  md: 'x6',
  lg: 'x8',
  xl: 'x10',
};

const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export const defaultProps = {
  size: 'md',
  name: 'default',
  textColor: 'blue',
};

type Sizes = keyof typeof iconSizes;
export type IconPropsBase = {
  size: Sizes | 'text';
  name: keyof typeof iconMapByName;
  xmlns?: string;
} & Pick<CSSProperties, DynamicProps>;

export const Styles = css<IconPropsBase>`
  ${({ theme, size }) => css`
      ${size === 'text'
      ? css`
        /* TODO: Make it better */
        width: 40px;
        height: 40px;
      `
      : css`
        width: ${theme.space[(iconSizes[size])]};
        height: ${theme.space[iconSizes[size]]};
      `}
  `}

  ${renderDynamicProps(commonDynamicProps)}
`;
