import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { BreakpointNames } from '../types/ThemeBreakpoints';

export default function breakpointsMedia(
  cssByBreakpoints: Partial<
    Record<BreakpointNames, string | FlattenSimpleInterpolation>
  >
) {
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
