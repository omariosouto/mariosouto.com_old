import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import Text from '../../Text/native';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';
import { actions } from '../actions';
import { sizeVariants } from '../sizeVariants';

const StyledComponents = styled(Ripple)<ButtonPropsBase & { activeOpacity?: number }>`
  ${Styles}
`;
function Component({children, ...props}: ButtonPropsBase) {
  const [isFocusIn, setFocusIn] = React.useState(false);  
  const theme = useTheme();
  const { color: textColor } = actions[props.action]({theme, ...props});
  return (
    <StyledComponents
      activeOpacity={1}
      isFocusIn={isFocusIn}
      onPressOut={() => setFocusIn(() => !isFocusIn)}
      onPressIn={() => setFocusIn(() => !isFocusIn)}
      {...propToMobile<ButtonPropsBase>(props)}>
        
      <Text textColor={textColor} variant={sizeVariants[props.size].typographyVariant} uppercase bold>
        {children}
      </Text>
    </StyledComponents>
  );
}

Component.defaultProps = {
  ...defaultProps,
};

export default Component;
