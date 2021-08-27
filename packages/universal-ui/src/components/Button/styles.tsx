import { css } from 'styled-components';
import borderRadius from '../../theme/foundation/basics/borderRadius';
import { CSSProperties, PropertyDefinition } from '../../theme/types/CSSProperties';
import { PLATFORM_WEB } from '../../theme/types/Platforms';
import propToStyle from '../../theme/utils/propToStyle';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';
import { actions } from './actions';
import { sizeVariants, SizeVariantName } from './sizeVariants';


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export type ButtonPropsBase = {
  size?: SizeVariantName;
  /** @deprecated Prefer to use <Box /> with flexbox properties */
  fullWidth?: PropertyDefinition<boolean>;
  isFocusIn?: boolean;
  children: React.ReactNode;
  baseColor?: 
    | 'primary'
    | 'accent'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'neutral';
  action?: 'primary' | 'secondary' | 'tertiary' | 'quartenary';
  disabled?: boolean;
} & Pick<CSSProperties, DynamicProps>;

export const defaultProps = {
  action: 'primary',
  baseColor: 'primary',
  fullWidth: false,
  disabled: false,
  size: 'sm',
};

export const Styles = css<ButtonPropsBase>`
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  ${propToStyle('width', 'fullWidth', (active: boolean) => active ? '100%' : '')}
  ${({ theme, action, isFocusIn, disabled }) => css`
    ${(props) => {
      const { background, borderColor, hoverfocus } = actions[action](props);

      if(disabled) return {
        background,
        borderColor,
      };

      return {
        background: isFocusIn ? hoverfocus.background : background,
        borderColor: isFocusIn ? hoverfocus.borderColor : borderColor,
        ...((theme.platform === PLATFORM_WEB) && {
          '&:hover, &:focus': {
            ...hoverfocus
          }
        })
      }
    }}
    ${({ theme, size }) => css`
      padding-top: ${theme.space[sizeVariants[size].py]};
      padding-bottom: ${theme.space[sizeVariants[size].py]};
      padding-left: ${theme.space[sizeVariants[size].px]};
      padding-right: ${theme.space[sizeVariants[size].px]};
    `}}
    border-radius: ${borderRadius.full};
    align-items: center;
    justify-content: center;
  `}
  ${renderDynamicProps(commonDynamicProps)}
  
  ${({ theme, disabled }) => (console.log('disabled', disabled), disabled && css`
      opacity: .5;
      ${theme.platform === PLATFORM_WEB && css`
        &:hover, &:focus {
          opacity: .5;
        }
      `}
      
  `)}
  `;
