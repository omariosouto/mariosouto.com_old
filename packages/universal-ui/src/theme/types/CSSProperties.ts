import { BorderRadiusNames } from '../foundation/basics/borderRadius';
import { BoxShadowNames } from '../foundation/basics/boxShadow';
import { BreakpointsNames } from '../foundation/breakpoints';
import { SpaceThemeNames } from '../foundation/space';

type ResponsiveProperty<T> = Partial<Record<BreakpointsNames, T>>;

export type PropertyDefinition<T> = T | ResponsiveProperty<T>;

export interface CSSProperties {
  // Text Props
  color?: PropertyDefinition<string>;
  textColor?: PropertyDefinition<string>;
  fontSize?: PropertyDefinition<string>;
  // ColorStyles
  background?: PropertyDefinition<string>;
  backgroundColor?: PropertyDefinition<string>;
  // Box Model
  width?: PropertyDefinition<string>;
  maxWidth?: PropertyDefinition<string>;
  height?: PropertyDefinition<string>;
  border?: PropertyDefinition<string>;
  margin?: PropertyDefinition<string>;
  marginLeft?: PropertyDefinition<string>;
  marginRight?: PropertyDefinition<string>;
  marginBottom?: PropertyDefinition<string>;
  marginTop?: PropertyDefinition<string>;
  padding?: PropertyDefinition<SpaceThemeNames | string>;
  paddingLeft?: PropertyDefinition<SpaceThemeNames>;
  paddingRight?: PropertyDefinition<SpaceThemeNames>;
  paddingBottom?: PropertyDefinition<SpaceThemeNames>;
  paddingTop?: PropertyDefinition<SpaceThemeNames>;
  // Flex
  flex?: PropertyDefinition<string>;
  // Standards
  overflow?: PropertyDefinition<
  'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | 'initial' | 'revert'
  >;
  boxShadow?: PropertyDefinition<BoxShadowNames>;
  borderRadius?: PropertyDefinition<BorderRadiusNames>;
}

export type CSSPropertiesNames = keyof CSSProperties;
