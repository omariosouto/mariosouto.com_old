import React from 'react';
import styled from 'styled-components/native';
import Text from '../../Text/native';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';

const StyledComponents = styled.TouchableOpacity<ButtonPropsBase>`
  ${Styles}
`;
function Component({children, ...props}: ButtonPropsBase) {
  return (
    <StyledComponents {...propToMobile<ButtonPropsBase>(props)}>
      <Text>{children}</Text>
    </StyledComponents>
  );
}

Component.defaultProps = {
  ...defaultProps,
};

export default Component;
