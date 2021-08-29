import React from 'react';
import styled from 'styled-components';
import propToMobile from '../../../theme/utils/propToMobile';
import Box from '../../Box/web';
import Text from '../../Text/web';

import { Styles, TextFieldPropsBase, defaultProps } from '../styles';


const TextFieldStyled = styled(Text)<TextFieldPropsBase>`
  ${Styles}
`;

export default function TextField({...mobileProps}: TextFieldPropsBase): JSX.Element {
  const props = propToMobile<TextFieldPropsBase>(mobileProps);

  return (
    <Box
      background="white"
      border="xpx solid neutral300"
      borderRadius="lg"
      overflow="hidden"
      paddingX="x3"
      paddingY="x2"
      boxShadow="sm"
    >
      <Text variant="body_2" textColor="neutral900" bold>{props.label}</Text>
      <TextFieldStyled
        textColor="neutral900"
        variant="body_2"
        value={props.value}
        {...props as any}
      />
    </Box>
  );
}

TextField.defaultProps = {
  ...defaultProps,
  as: 'input',
};
