import { ReactNode } from 'react';
import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';
import Box, { BoxProps } from '../Box';
import { PropertyDefinition } from '../Box/css/CSSProperties';

interface GridCellBaseProps {
  className?: string;
  as?: string;
  children: ReactNode;
  cellWidth?: PropertyDefinition<number>;
  cellHeight?: PropertyDefinition<number>;
  area?: string;
  cellPositionLeft?: PropertyDefinition<number>;
  cellPositionTop?: PropertyDefinition<number>;
}

type GridCellProps = GridCellBaseProps & BoxProps;

const StyledGridCell = styled(Box)<GridCellProps>`
  height: 100%;
  min-width: 0;
  ${propToStyle('gridColumnEnd', 'cellWidth', (width) => `span ${width}`)}
  ${propToStyle('gridRowEnd', 'cellHeight', (height) => `span ${height}`)}
  ${({ area }) => area && `grid-area: ${area}`};
  ${propToStyle('gridColumnStart', 'cellPositionLeft')}
  ${propToStyle('gridRowStart', 'cellPositionTop')}
`;

function GridCell({ children, as, ...props }: GridCellProps): JSX.Element {
  return (
    <StyledGridCell tag={as} {...props}>
      {children}
    </StyledGridCell>
  );
}

GridCell.defaultProps = {
  cellWidth: 1,
  cellHeight: 1,
  area: '',
};

export default GridCell;
