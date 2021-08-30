import React from 'react';
import styled from 'styled-components/native';
import { Styles, BoxPropsBase } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';


type BoxProps = BoxPropsBase;

const StyledComponentsBox = styled.View<BoxProps>`
  ${Styles}
`;

function Box({children, ...mobileProps}: BoxPropsBase) {
  const props = withStyledInternalProps(propToMobile<BoxPropsBase>(mobileProps));
  return (
    <StyledComponentsBox
      {...props as any}
    >
      {children}
    </StyledComponentsBox>
  );
}

export default Box;
