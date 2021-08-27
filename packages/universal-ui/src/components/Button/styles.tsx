import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { PLATFORM_WEB } from '../../theme/types/Platforms';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';
import { actions } from './actions';


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export type ButtonPropsBase = {
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
} & Pick<CSSProperties, DynamicProps>;

export const defaultProps = {
  action: 'primary',
  baseColor: 'accent',
};

export const Styles = css<ButtonPropsBase>`
  ${({ theme, action, isFocusIn }) => css`
    ${(props) => {
      const { background, border, hoverfocus } = actions[action](props);

      return {
        background: isFocusIn ? hoverfocus.background : background,
        border: isFocusIn ? hoverfocus.border : border,
        ...(theme.platform === PLATFORM_WEB && {
          '&:hover, &:focus': {
            ...hoverfocus
          }
        })
      }
    }}
    padding: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  `}
  ${renderDynamicProps(commonDynamicProps)}
  `;
