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
  borderRadius?: PropertyDefinition<'none' | 'sm' | 'md' | 'lg' | 'full'>;
  margin?: PropertyDefinition<string>;
  marginLeft?: PropertyDefinition<string>;
  marginRight?: PropertyDefinition<string>;
  marginBottom?: PropertyDefinition<string>;
  marginTop?: PropertyDefinition<string>;
  padding?: PropertyDefinition<string>;
  paddingLeft?: PropertyDefinition<SpaceThemeNames | string>;
  paddingRight?: PropertyDefinition<SpaceThemeNames | string>;
  paddingBottom?: PropertyDefinition<SpaceThemeNames | string>;
  paddingTop?: PropertyDefinition<SpaceThemeNames | string>;
  // Flex
  flex?: PropertyDefinition<string>;
}
