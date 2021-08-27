import React from 'react';
import styled, { useTheme } from 'styled-components';
import Text from '../../Text/web';
import { actions } from '../actions';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';
import { sizeVariants } from '../sizeVariants';


const StyledComponents = styled.button<ButtonPropsBase>`
  display: flex;
  cursor: pointer;
  ${Styles}

  :disabled {
    cursor: not-allowed;
  }
`;

type ButtonWebProps = ButtonPropsBase;
function Button({ color:_, children, fullWidth, ...props}: ButtonWebProps) {
  const theme = useTheme();
  const { color: textColor } = actions[props.action]({theme, ...props});

  return (
    <StyledComponents fullWidth={fullWidth} {...props}>
      <Text textColor={textColor} variant={sizeVariants[props.size].typographyVariant}>
        {children}
      </Text>
    </StyledComponents>
  );
}

Button.defaultProps = {
  ...defaultProps,
};

export default Button;
