import React from 'react';
import styled from 'styled-components/native';
import { Styles, TextPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';

const StyledComponents = styled.Text<TextPropsBase>`
  ${Styles}
`;
function Text(props: TextPropsBase) {
  return (
    <StyledComponents {...propToMobile<TextPropsBase>(props)} />
  );
}

Text.defaultProps = {
  ...defaultProps,
};

export default Text;
