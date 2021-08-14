import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { BreakpointNames } from '../types/ThemeBreakpoints';
import { ThemeSpaceNames } from '../types/ThemeSpace';

export type CSSByBreakpoints = Partial<
  Record<
    BreakpointNames,
    | string
    | FlattenSimpleInterpolation
    | ThemeSpaceNames
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
    return breakpointsNames.map(
      (breakpointName: BreakpointNames) => css`
        @media screen and (min-width: ${theme.breakpoints[breakpointName]}) {
          ${cssByBreakpoints[breakpointName]}
        }
      `
    );
  };
}
