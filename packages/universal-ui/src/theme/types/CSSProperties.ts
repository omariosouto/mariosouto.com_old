import { BreakpointsNames } from '../foundation/breakpoints';

type ResponsiveProperty<T> = Partial<Record<BreakpointsNames, T>>;

export type PropertyDefinition<T> = T | ResponsiveProperty<T>;

export interface CSSProperties {
  // ColorStyles
  color?: PropertyDefinition<string>;
  background?: PropertyDefinition<string>;
  backgroundColor?: PropertyDefinition<string>;
  // Box Model
  width?: PropertyDefinition<string>;
  maxWidth?: PropertyDefinition<string>;
  height?: PropertyDefinition<string>;
  border?: PropertyDefinition<string>;
  borderRadius?: PropertyDefinition<'none' | 'sm' | 'md' | 'lg' | 'full'>;
  display?: PropertyDefinition<
    | 'none'
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
  // Flex
  flex?: PropertyDefinition<string>;
}
