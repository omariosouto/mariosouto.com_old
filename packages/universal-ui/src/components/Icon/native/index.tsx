import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import styled, { useTheme } from 'styled-components/native';

import propToMobile from '../../../theme/utils/propToMobile';
import propToStyle from '../../../theme/utils/propToStyle';

import { iconMapByName } from '../iconMapByName';
import { Styles, IconPropsBase, defaultProps } from '../styles';


const StyledSVG = styled(Svg)<IconPropsBase>`
  ${Styles}
`;

export default function Icon(props: IconPropsBase): JSX.Element {
  const mobileProps = propToMobile<IconPropsBase>(props)
  const theme = useTheme();
  const { color: textColor } = propToStyle('$color', '$textColor')({...mobileProps, theme});
  const defaultIcon = iconMapByName[mobileProps.$name]({ Path, G, textColor });

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...mobileProps as any}
    >
      {defaultIcon}
    </StyledSVG>
  );
}

Icon.defaultProps = defaultProps;
