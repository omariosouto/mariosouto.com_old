import React from 'react';
import styled from 'styled-components/native';
import { Styles, BoxPropsBase } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';

type BoxProps = BoxPropsBase;

const StyledComponentsBox = styled.View<BoxProps>`
  ${Styles}
`;

function Box(mobileProps: BoxPropsBase) {
  const props = propToMobile<BoxPropsBase>(mobileProps);
  return (
    <StyledComponentsBox
      {...props}
    />
  );
}

export default Box;
