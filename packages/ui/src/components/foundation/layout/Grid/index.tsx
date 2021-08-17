import styled from 'styled-components';
import Box, { BoxProps } from '../Box';
import propToStyle from '../../../../theme/utils/propToStyle';
import { PropertyDefinition } from '../Box/css/CSSProperties';

export { default as GridCell } from './GridCell';

type GridProps = Omit<BoxProps, 'display'> & GridBaseProps;
interface GridBaseProps {
  gridFlow?: PropertyDefinition<string>;
  gridRows?: PropertyDefinition<string | number>;
  gridAreas?: PropertyDefinition<string[]>;
  gridColumns?: PropertyDefinition<number>;
  columnGap?: PropertyDefinition<string>;
  alignContent?: PropertyDefinition<string>;
  rowGap?: PropertyDefinition<string>;
  minRowHeight?: PropertyDefinition<string>;
  gridGap?: PropertyDefinition<string>;
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

function Grid({ as, ...props }: GridProps): JSX.Element {
  return <StyledGrid tag={as} {...props} />;
}

Grid.defaultProps = {
  display: 'grid',
  height: 'auto',
  gridFlow: 'row',
  minRowHeight: 'x20',
  gridColumns: 12,
  gridGap: 'x0',
};

export default Grid;
