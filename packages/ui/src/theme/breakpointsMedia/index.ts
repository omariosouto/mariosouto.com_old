import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { ThemeBreakpoints, BreakpointNames } from '../types/ThemeBreakpoints';

export default function breakpointsMedia(cssByBreakpoints: ThemeBreakpoints) {
  return ({ theme }: { theme: DefaultTheme }): FlattenSimpleInterpolation[] => {
    const breakpointsNames = Object.keys(cssByBreakpoints);
    return breakpointsNames.map(
      (breakpointName: BreakpointNames) => css`
        @media screen and (min-width: ${theme.breakpoints[breakpointName]}px) {
          ${cssByBreakpoints[breakpointName]}
        }
      `
    );
  };
}
