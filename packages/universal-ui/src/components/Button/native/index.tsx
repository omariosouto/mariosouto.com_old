import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Text from '../../Text/native';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';
import { actions } from '../actions';

const StyledComponents = styled.TouchableOpacity<ButtonPropsBase>`
  ${Styles}
`;
function Component({children, ...props}: ButtonPropsBase) {
  const theme = useTheme();
  const { color: textColor } = actions[props.action]({theme, ...props});

  return (
    <StyledComponents {...propToMobile<ButtonPropsBase>(props)}>
      <Text textColor={textColor}>{children}</Text>
    </StyledComponents>
  );
}

Component.defaultProps = {
  ...defaultProps,
};

export default Component;
