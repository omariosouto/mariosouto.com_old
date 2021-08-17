import { BreakpointNames } from '../../../../../theme/types/ThemeBreakpoints';

type ResponsiveProperty<T> = Partial<Record<BreakpointNames, T>>;

export type PropertyDefinition<T> = T | ResponsiveProperty<T>;

export interface CSSProperties {
  // Box Model
  width?: PropertyDefinition<string>;
  height?: PropertyDefinition<string>;
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
  marginLeft?: PropertyDefinition<string>;
  marginRight?: PropertyDefinition<string>;
  marginBottom?: PropertyDefinition<string>;
  marginTop?: PropertyDefinition<string>;
  padding?: PropertyDefinition<string>;
  paddingLeft?: PropertyDefinition<string>;
  paddingRight?: PropertyDefinition<string>;
  paddingBottom?: PropertyDefinition<string>;
  paddingTop?: PropertyDefinition<string>;
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
  overflow?: PropertyDefinition<
    'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | 'initial' | 'revert'
  >;
  // Box Decoration
  opacity?: PropertyDefinition<number | 'initial' | 'inherit'>;
  boxShadow?: PropertyDefinition<string>;
  listStyleType?: PropertyDefinition<'none' | 'disc' | 'circle' | 'square'>;
  // Text
  textAlign?: PropertyDefinition<'center' | 'left' | 'right' | 'justify'>;
  verticalAlign?: PropertyDefinition<
    | 'baseline'
    | 'top'
    | 'bottom'
    | 'middle'
    | 'text-top'
    | 'text-bottom'
    | 'sub'
    | 'super'
    | 'length'
  >;
  // FlexBox/Grid
  /** https://developer.mozilla.org/en-US/docs/Web/CSS/flex */
  flex?: PropertyDefinition<string>;
  order?: PropertyDefinition<string>;
  alignItems?: PropertyDefinition<
    'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;
  justifyContent?: PropertyDefinition<
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;
  flexDirection?: PropertyDefinition<
    'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit'
  >;
  // Grid
  gridColumnEnd?: PropertyDefinition<string>;
  gridRowEnd?: PropertyDefinition<string>;
  gridRowStart?: PropertyDefinition<string>;
  gridColumnStart?: PropertyDefinition<string>;
  gridAutoFlow?: PropertyDefinition<string>;
  gridAutoRows?: PropertyDefinition<string>;
  gridTemplateRows?: PropertyDefinition<string>;
  gridTemplateColumns?: PropertyDefinition<string>;
  gridGap?: PropertyDefinition<string>;
  columnGap?: PropertyDefinition<string>;
  rowGap?: PropertyDefinition<string>;
  gridTemplateAreas?: PropertyDefinition<string>;
  alignContent?: PropertyDefinition<string>;
}
