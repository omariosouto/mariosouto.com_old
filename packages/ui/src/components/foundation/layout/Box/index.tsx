// WIP
import React from 'react';
import styled from 'styled-components';
export { default as Grid } from './Grid';
export { default as GridCell } from './Grid/GridCell';

const StyledBox = styled.div`
  /* background: red !important; */
`;

interface BoxProps {
  children: React.ReactNode;
}
export default function Box({ children, ...props }: BoxProps): JSX.Element {
  return <StyledBox {...props}>{children}</StyledBox>;
}

// TODO: Divider: https://tailwindcss.com/docs/divide-style
// TODO: Border-radius: https://tailwindcss.com/docs/border-radius
// TODO: Box-shadow: https://tailwindcss.com/docs/box-shadow
// TODO: Animation: https://tailwindcss.com/docs/animation
// TODO: Screen header: https://tailwindcss.com/docs/screen-readers
// TODO: Aspect Ratio: https://github.com/tailwindlabs/tailwindcss-aspect-ratio
