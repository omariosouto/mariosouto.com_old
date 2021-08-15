import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';
import breakpointsMedia, { CSSByBreakpoints } from '../breakpointsMedia';
import { CSSProperties } from '../../../components/foundation/layout/Box/css/CSSProperties';
import { parseValue } from './parseValue';

type PropName = keyof CSSProperties;
type CSSPropValues = { theme?: DefaultTheme } & Partial<
  Record<PropName, CSSByBreakpoints | string>
>;

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
    const { theme } = props;
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: parseValue(theme, propName, propValue),
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints: CSSByBreakpoints = {};

      if (propValue.xs)
        breakpoints.xs = {
          [propName]: parseValue(theme, propName, propValue.xs),
        };
      if (propValue.sm)
        breakpoints.sm = {
          [propName]: parseValue(theme, propName, propValue.sm),
        };
      if (propValue.lg)
        breakpoints.lg = {
          [propName]: parseValue(theme, propName, propValue.lg),
        };
      if (propValue.sm)
        breakpoints.sm = {
          [propName]: parseValue(theme, propName, propValue.sm),
        };
      if (propValue.md)
        breakpoints.md = {
          [propName]: parseValue(theme, propName, propValue.md),
        };

      return breakpointsMedia(breakpoints);
    }

    return {};
  };
}
