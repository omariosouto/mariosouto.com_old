import React from 'react';
import styled from 'styled-components';
import { CSSProperties } from '../../../../infra/css/CSSProperties';
import propToStyle from '../../../../theme/utils/propToStyle';

const StyledBox = styled.div<BoxProps>`
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`;

interface BoxPropsBase {
  children: React.ReactNode;
}
type BoxProps = BoxPropsBase & CSSProperties;
export default function Box({ children, ...props }: BoxProps): JSX.Element {
  return <StyledBox {...props}>{children}</StyledBox>;
}

Box.defaultProps = {
  margin: 'x1 x2 x3 x4',
};

// TODO: List: https://tailwindcss.com/docs/list-style-type
// TODO: Divider: https://tailwindcss.com/docs/divide-style
// TODO: Border-radius: https://tailwindcss.com/docs/border-radius
// TODO: Box-shadow: https://tailwindcss.com/docs/box-shadow
// TODO: Animation: https://tailwindcss.com/docs/animation
// TODO: Screen header: https://tailwindcss.com/docs/screen-readers
// TODO: Aspect Ratio: https://github.com/tailwindlabs/tailwindcss-aspect-ratio
// TODO: Border: https://tailwindcss.com/docs/border-width
