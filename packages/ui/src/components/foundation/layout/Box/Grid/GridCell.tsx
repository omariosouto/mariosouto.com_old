import styled from 'styled-components';
import Box from '../index';

interface CellProps {
  width?: number | string;
  height?: number | string;
  left?: boolean;
  top?: boolean;
  center?: boolean;
  middle?: boolean;
  area?: string;
  className?: string;
}
const Cell = styled(Box)<CellProps>`
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};
  ${({ center }) => center && `text-align: center`};
  ${({ area }) => area && `grid-area: ${area}`};
  ${
    /* prettier-ignore */
    ({ middle }) => middle && `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `
  };
`;

export default Cell;
