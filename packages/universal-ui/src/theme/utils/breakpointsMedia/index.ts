import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { BreakpointsNames } from '../../foundation/breakpoints';
import { SpaceThemeNames } from '../../foundation/space';

export type CSSByBreakpoints = Partial<
  Record<
    BreakpointsNames,
    | string
    | FlattenSimpleInterpolation
    | SpaceThemeNames
    | Record<string, string>
  >
>;

export default function breakpointsMedia(cssByBreakpoints: CSSByBreakpoints) {
  return ({
    theme,
  }: {
    theme: DefaultTheme;
  }): FlattenSimpleInterpolation[] | string[] => {
    const breakpointsNames = Object.keys(cssByBreakpoints);
    console.log('breakpointsNames', cssByBreakpoints.md);
    return breakpointsNames.map(
      (breakpointName: BreakpointsNames) => css`
        @media screen and (min-width: ${theme.breakpoints[breakpointName]}) {
          ${cssByBreakpoints[breakpointName]}
        }
      `
    );
  };
}
