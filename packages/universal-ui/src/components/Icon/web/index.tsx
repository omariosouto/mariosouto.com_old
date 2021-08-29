import React from 'react';
import styled, { useTheme } from 'styled-components';

import propToStyle from '../../../theme/utils/propToStyle';

import { iconMapByName } from '../iconMapByName';
import { Styles, IconPropsBase, defaultProps } from '../styles';


const StyledSVG = styled.svg<IconPropsBase>`
  ${Styles}
`;

const Path = styled.path``;
const G = styled.g``;

export default function Icon(props: IconPropsBase): JSX.Element {
  const theme = useTheme();
  const { color: textColor } = propToStyle('color', 'textColor')({...props, theme});
  const defaultIcon = iconMapByName[props.name]({ Path, G, textColor });

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props as any}
    >
      {defaultIcon}
    </StyledSVG>
  );
}

Icon.defaultProps = defaultProps;
