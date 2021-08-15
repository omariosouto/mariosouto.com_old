/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';
import breakpointsMedia, { CSSByBreakpoints } from '../breakpointsMedia';
import { CSSProperties } from '../../../infra/css/CSSProperties';

type PropName = keyof CSSProperties;
type CSSPropValues = Partial<Record<PropName, CSSByBreakpoints | string>>;

type Output =
  | (({
      theme,
    }: {
      theme: DefaultTheme;
    }) => FlattenSimpleInterpolation[] | string[])
  | {
      [x: string]: string;
    };

export default function propToStyle(propName: PropName) {
  return (props: CSSPropValues): Output => {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints: CSSByBreakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: `${propValue.xs}` };
      if (propValue.sm) breakpoints.sm = { [propName]: `${propValue.sm}` };
      if (propValue.lg) breakpoints.lg = { [propName]: `${propValue.lg}` };
      if (propValue.sm) breakpoints.sm = { [propName]: `${propValue.sm}` };
      if (propValue.md) breakpoints.md = { [propName]: `${propValue.md}` };

      return breakpointsMedia(breakpoints);
    }

    return {};
  };
}
