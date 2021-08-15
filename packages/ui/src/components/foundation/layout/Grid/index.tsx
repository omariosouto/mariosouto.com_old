import styled, { css } from 'styled-components';
import Box, { BoxProps } from '../Box';

type GridProps = Omit<BoxProps, 'display'> & GridBaseProps;
interface GridBaseProps {
  height?: string;
  flow?: string;
  rows?: string | number;
  areas?: string[];
  columns?: string | number;
  columnGap?: string;
  alignContent?: string;
  justifyContent?: string;
  rowGap?: string;
  minRowHeight?: string;
  gap?: string;
}

const autoRows = ({ minRowHeight = '20px' }: GridProps) =>
  `minmax(${minRowHeight}, auto)`;

const frGetter = (value: string | number) =>
  typeof value === 'number' ? `repeat(${value}, 1fr)` : value;

const gap = ({ gap = '8px' }: GridProps) => gap;

const flow = ({ flow = 'row' }) => flow;

const formatAreas = (areas: string[]) =>
  areas.map((area) => `"${area}"`).join(' ');

// TODO: Grid alignment https://tailwindcss.com/docs/align-content
// TODO: Grid auto row https://tailwindcss.com/docs/grid-auto-rows
const StyledGrid = styled(Box)<GridProps>`
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

function Grid(props: GridProps): JSX.Element {
  return <StyledGrid {...props} />;
}

export default Grid;
