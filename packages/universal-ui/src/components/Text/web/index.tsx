import React from 'react';
import styled from 'styled-components';
import { Styles, TextPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';

const StyledComponents = styled.span<TextPropsBase>`
  ${Styles}
`;

type TextWebProps = TextPropsBase & {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'a' | 'li';
};
function Text(props: TextWebProps) {
  return (
    <StyledComponents {...props} />
  );
}

Text.defaultProps = {
  ...defaultProps,
};

export default Text;
