// WIP
import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div<BoxProps>`
  background: ${({ background }) => background} !important;
`;

interface BoxProps {
  background: string;
  children: React.ReactNode;
}
export default function Box({ children, ...props }: BoxProps): JSX.Element {
  return <StyledBox {...props}>{children}</StyledBox>;
}

Box.defaultProps = {
  background: '#fff4eb',
};

// TODO: List: https://tailwindcss.com/docs/list-style-type
// TODO: Divider: https://tailwindcss.com/docs/divide-style
// TODO: Border-radius: https://tailwindcss.com/docs/border-radius
// TODO: Box-shadow: https://tailwindcss.com/docs/box-shadow
// TODO: Animation: https://tailwindcss.com/docs/animation
// TODO: Screen header: https://tailwindcss.com/docs/screen-readers
// TODO: Aspect Ratio: https://github.com/tailwindlabs/tailwindcss-aspect-ratio
// TODO: Border: https://tailwindcss.com/docs/border-width
