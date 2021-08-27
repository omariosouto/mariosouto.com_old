import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';
import { actions } from './actions';


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export type ButtonPropsBase = {
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
  ${({ action }) => css`
    ${(props) => {
      const { background, border } = actions[action](props);
      return {
        background,
        border,
      }
    }}
    padding: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  `}
  ${renderDynamicProps(commonDynamicProps)}
  `;
