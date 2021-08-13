import styled, { css } from 'styled-components';
import Box from '../Box';

const autoRows = ({ minRowHeight = '20px' }: GridProps) =>
  `minmax(${minRowHeight}, auto)`;

const frGetter = (value) =>
  typeof value === 'number' ? `repeat(${value}, 1fr)` : value;

const gap = ({ gap = '8px' }: GridProps) => gap;

const flow = ({ flow = 'row' }) => flow;

const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');

// TODO: Grid alignment https://tailwindcss.com/docs/align-content
// TODO: Grid auto row https://tailwindcss.com/docs/grid-auto-rows
interface GridProps {
  height?: string;
  flow?: string;
  rows?: string;
  areas?: string[];
  columns?: string | number;
  columnGap?: string;
  alignContent?: string;
  justifyContent?: string;
  rowGap?: string;
  minRowHeight?: string;
  gap?: string;
}
const Grid = styled(Box)<GridProps>`
  display: grid;
  height: ${({ height = 'auto' }) => height};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }: GridProps) =>
    rows &&
    css`
      grid-template-rows: ${frGetter(rows)};
    `};
  grid-template-columns: ${({ columns = 12 }: GridProps) => frGetter(columns)};
  grid-gap: ${gap};
  ${({ columnGap }: GridProps) =>
    columnGap &&
    css`
      column-gap: ${columnGap};
    `};
  ${({ rowGap }: GridProps) =>
    rowGap &&
    css`
      row-gap: ${rowGap};
    `};
  ${({ areas }: GridProps) =>
    areas &&
    css`
      grid-template-areas: ${formatAreas(areas)};
    `};
  ${({ justifyContent }: GridProps) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};
  ${({ alignContent }: GridProps) =>
    alignContent &&
    css`
      align-content: ${alignContent};
    `};
`;

export default Grid;
