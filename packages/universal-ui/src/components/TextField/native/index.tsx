import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import propToMobile from '../../../theme/utils/propToMobile';
import Box from '../../Box/native';
import Text from '../../Text/native';

import { Styles, TextFieldPropsBase, defaultProps } from '../styles';


const TextFieldStyled = styled(Text)<TextFieldPropsBase>`
  ${Styles}
`;

export default function TextField({...mobileProps}: TextFieldPropsBase): JSX.Element {
  const props = propToMobile<TextFieldPropsBase>(mobileProps);

  return (
    <Box
      $background="white"
      $border="xpx solid neutral300"
      $borderRadius="lg"
      $overflow="hidden"
      $paddingX="x3"
      $paddingY="x2"
      $boxShadow="lg"
    >
      <Text $variant="body_2" $textColor="neutral900" $bold>{props.$label}</Text>
      <TextFieldStyled
        $textColor="neutral900"
        $variant="body_2"
        value={props.$value}
        placeholder={props.$placeholder}
        {...props as any}
        onChangeText={(text: string) => {
          props.$onChange && props.$onChange({
            value: text,
            name: props.$name,
          });
        }}
      />
    </Box>
  );
}

TextField.defaultProps = {
  ...defaultProps,
  as: TextInput,
};
