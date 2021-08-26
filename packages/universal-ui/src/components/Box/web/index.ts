import styled from 'styled-components';
import { BoxPropsBase, Styles } from '../styles';

type BoxProps = BoxPropsBase;
const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  ${Styles}
`;

export default Box;
