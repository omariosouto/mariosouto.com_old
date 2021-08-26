import React from 'react';
import styled from 'styled-components';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';

const StyledComponents = styled.button<ButtonPropsBase>`
  display: flex;
  cursor: pointer;
  ${Styles}
`;

type ButtonWebProps = ButtonPropsBase;
function Button({ color:_, ...props}: ButtonWebProps) {
  return (
    <StyledComponents {...props} />
  );
}

Button.defaultProps = {
  ...defaultProps,
};

export default Button;
