import styled from 'styled-components/native';
import { Styles, BoxPropsBase } from '../styles';

type BoxProps = BoxPropsBase;
const Box = styled.View<BoxProps>`
  ${Styles}
`;

export default Box;
