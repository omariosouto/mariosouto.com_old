import { css } from 'styled-components';
import { TypographyVariantsName } from '../../theme/foundation/typography/types';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { PLATFORM_WEB } from '../../theme/types/Platforms';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';

function fontWeightHandler(bold: boolean, variant: string, fontWeight: string) {
  const boldVariants = {
    semibold: '600',
    extrabold: '800',
  };
  if (variant.includes('display') || variant.includes('heading')) {
    return bold ? boldVariants.extrabold : fontWeight;
  }

  return bold ? boldVariants.semibold : fontWeight;
}


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export type TextPropsBase = {
  children: React.ReactNode;
  bold?: boolean;
  uppercase?: boolean;
  variant?: TypographyVariantsName;
 } & Pick<CSSProperties, DynamicProps>;

export const defaultProps = {
  bold: false,
  uppercase: false,
  variant: 'body_2',
};

export const Styles = css<TextPropsBase>`
  ${({ theme, bold, variant, uppercase }) => css`
    font-size: ${theme.typography[variant].xs.fontSize};
    line-height: ${theme.typography[variant].xs.lineHeight};
    font-weight: ${fontWeightHandler(
      bold,
      variant,
      theme.typography[variant].xs.fontWeight
    )};
    letter-spacing: ${theme.typography[variant].xs.letterSpacing ? theme.typography[variant].xs.letterSpacing : '0px'};

    ${uppercase && `text-transform: uppercase;`}

    ${theme.platform === PLATFORM_WEB
      ? breakpointsMedia({
        md: css`
          font-size: ${theme.typography[variant].md.fontSize};
          font-weight: ${fontWeightHandler(
            bold,
            variant,
            theme.typography[variant].md.fontWeight
          )};
          line-height: ${theme.typography[variant].md.lineHeight};
          letter-spacing: ${theme.typography[variant].md.letterSpacing};
        `,
      })
      : ''
    }
  `}
  ${renderDynamicProps(commonDynamicProps)}
  `;
