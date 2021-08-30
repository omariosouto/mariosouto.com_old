import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { PLATFORM_WEB } from '../../theme/types/Platforms';
import { renderDynamicProps, commonDynamicProps } from '../Box/styles';
import { Styles as TextStyles } from '../Text/styles';

const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export const defaultProps = {};

export type TextFieldPropsBase = {
  $name?: string;
  $value?: string;
  $label?: string;
  $placeholder?: string;
  $onChange?: (args: { value: string, name: string }) => void;
} & Pick<CSSProperties, DynamicProps>;

export const Styles = css<TextFieldPropsBase>`
  ${TextStyles}
  border: 0;
  ${({ theme }) => css`
    ${theme.platform === PLATFORM_WEB && css`
      outline: 0;
    `}
  `}
  ${renderDynamicProps(commonDynamicProps)}
`;
