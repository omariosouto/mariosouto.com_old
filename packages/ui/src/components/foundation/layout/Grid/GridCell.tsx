import styled from 'styled-components';
import Box from '../Box';

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
const GridCell = styled(Box)<CellProps>`
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width }) => `span ${width}`};
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

GridCell.defaultProps = {
  width: 1,
};

export default GridCell;
