import { css } from 'styled-components';

function propToStyle(propName: string) {
  return {
    [propName]: '10px'
  }
}

const commonProps = {
  margin: propToStyle('margin'),
  padding: propToStyle('padding'),
} as const;

const dynamicProps = {
  ...commonProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export const Styles = css`
  /* ${Object.keys(dynamicProps)
    .map((dynamicPropKey: DynamicProps) => dynamicProps[dynamicPropKey]).join('\n')} */
  padding-top: 80px;
  flex: 1;
  background-color: blue;
`;
