import React from 'react';
import styled, { useTheme } from 'styled-components';
import Text from '../../Text/web';
import { actions } from '../actions';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';

const StyledComponents = styled.button<ButtonPropsBase>`
  display: flex;
  cursor: pointer;
  ${Styles}
`;

type ButtonWebProps = ButtonPropsBase;
function Button({ color:_, children, ...props}: ButtonWebProps) {
  const theme = useTheme();
  const { color: textColor } = actions[props.action]({theme, ...props});

  return (
    <StyledComponents {...props}>
      <Text textColor={textColor}>
        {children}
      </Text>
    </StyledComponents>
  );
}

Button.defaultProps = {
  ...defaultProps,
};

export default Button;
