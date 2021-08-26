import React from 'react';
import styled from 'styled-components/native';
import { Styles, TextPropsBase } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';

type TextProps = TextPropsBase;

const StyledComponents = styled.Text<TextProps>`
  ${Styles}
`;

function Text(props: TextPropsBase) {
  return (
    <StyledComponents {...propToMobile<TextPropsBase>(props)} />
  );
}

export default Text;
