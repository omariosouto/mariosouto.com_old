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

// TODO: Divider https://tailwindcss.com/docs/divide-style
