import { BreakpointNames } from '../../../../../theme/types/ThemeBreakpoints';

type ResponsiveProperty<T> = Partial<Record<BreakpointNames, T>>;

type PropertyDefinition<T> = T | ResponsiveProperty<T>;

export interface CSSProperties {
  // Box Model
  display?: PropertyDefinition<
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
  >;
  margin?: PropertyDefinition<string>;
  padding?: PropertyDefinition<string>;
  position?: PropertyDefinition<
    | 'static'
    | 'relative'
    | 'absolute'
    | 'fixed'
    | 'sticky'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
  >;
  // Box Decoration
  opacity?: PropertyDefinition<number | 'initial' | 'inherit'>;
  boxShadow?: PropertyDefinition<string>;
  listStyleType?: PropertyDefinition<'none' | 'disc' | 'circle' | 'square'>;
  // Text
  textAlign?: PropertyDefinition<'center' | 'left' | 'right' | 'justify'>;
  // FlexBox/Grid
  flex?: PropertyDefinition<string>;
  alignItems?: PropertyDefinition<
    'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}
