import React from 'react';
import styled from 'styled-components/native';
import propToMobile from '../../../theme/utils/propToMobile';
import Box from '../../Box/native';

import { Styles, ImagePropsBase, defaultProps } from '../styles';


const ImageStyled = styled.Image<ImagePropsBase>`
  ${Styles}
`;

export default function Image({...mobileProps}: ImagePropsBase): JSX.Element {
  const {src, ...props} = propToMobile<ImagePropsBase>(mobileProps);

  return (
    <Box {...props as any}>
      <ImageStyled
        flex="1"
        source={{
          uri: src,
        }}
      />
    </Box>
  );
}

Image.defaultProps = {
  ...defaultProps,
};
