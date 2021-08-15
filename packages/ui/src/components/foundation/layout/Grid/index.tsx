import styled from 'styled-components';
import Box, { BoxProps } from '../Box';
import propToStyle from '../../../../theme/utils/propToStyle';

type GridProps = Omit<BoxProps, 'display'> & GridBaseProps;
interface GridBaseProps {
  gridFlow?: string;
  gridRows?: string | number;
  gridAreas?: string[];
  gridColumns?: string | number;
  columnGap?: string;
  alignContent?: string;
  justifyContent?: string;
  rowGap?: string;
  minRowHeight?: string;
  gridGap?: string;
}

const frGetter = (value: string | number) =>
  typeof value === 'number' ? `repeat(${value}, 1fr)` : value;

const formatAreas = (areas: string[]) =>
  areas.map((area) => `"${area}"`).join(' ');

const StyledGrid = styled(Box)<GridProps>`
  ${propToStyle('gridAutoFlow', 'gridFlow')}
  ${propToStyle(
    'gridAutoRows',
    'minRowHeight',
    (minRowHeight) => `minmax(${minRowHeight}, auto)`
  )}
  ${propToStyle('gridTemplateRows', 'gridRows', (rows: string | number) =>
    frGetter(rows)
  )}
  ${propToStyle(
    'gridTemplateColumns',
    'gridColumns',
    (columns: string | number) => frGetter(columns)
  )}
  ${propToStyle('gridGap', 'gap')}
  ${propToStyle('columnGap')}
  ${propToStyle('rowGap')}
  ${propToStyle('gridTemplateAreas', 'gridAreas', (areas: string[]) =>
    formatAreas(areas)
  )}
  ${propToStyle('alignContent')}
`;

function Grid(props: GridProps): JSX.Element {
  return <StyledGrid {...props} />;
}

Grid.defaultProps = {
  display: 'grid',
  height: 'auto',
  gridFlow: 'row',
  minRowHeight: 'x20',
  gridColumns: 12,
  gridGap: 'x4',
};

export default Grid;
