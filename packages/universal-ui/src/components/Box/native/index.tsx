import React from 'react';
import styled from 'styled-components/native';
import { Styles, BoxPropsBase } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';

type BoxProps = BoxPropsBase;

const StyledComponentsBox = styled.View<BoxProps>`
  ${Styles}
`;

function Box(props: BoxPropsBase) {
  return (
    <StyledComponentsBox {...propToMobile<BoxPropsBase>(props)} />
  );
}

export default Box;
