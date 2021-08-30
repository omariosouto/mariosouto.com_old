import React from 'react';
import styled from 'styled-components';
import Box from '../../Box/web';

import { Styles, ImagePropsBase, defaultProps } from '../styles';


const StyledImage = styled.img<ImagePropsBase>`
  ${Styles}
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default function Image({$src, ...props}: ImagePropsBase): JSX.Element {
  return (
    <Box {...props as any}>
      <StyledImage src={$src} />
    </Box>
  );
}

Image.defaultProps = {
  ...defaultProps,
};
