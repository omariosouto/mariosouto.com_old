import { DefaultTheme } from 'styled-components';
import breakpointsMedia, { CSSByBreakpoints } from '../breakpointsMedia';
import { CSSProperties } from '../../types/CSSProperties';
import { parseValue } from './parseValue';
import { PLATFORM_MOBILE } from '../../types/Platforms';

type PropName = keyof CSSProperties;
type CSSPropValues = { theme?: DefaultTheme } & Partial<
  Record<PropName | string, CSSByBreakpoints | string>
>;

export default function propToStyle(
  propName: PropName,
  propNameAlias?: string,
  valueAdapter: (receivedValue: unknown) => string = (value: undefined) => value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: CSSPropValues): any => {
    const { theme } = props;
    const propValue = props[propName] || props[propNameAlias];

    if (typeof propValue === 'object' && !Array.isArray(propValue)) {

      if(theme.platform === PLATFORM_MOBILE) {
        const validValueInBreapointOrder = propValue.xs; 
        return {
          [propName]: parseValue(theme, propName, valueAdapter(validValueInBreapointOrder)),
        }
      }

      const breakpoints: CSSByBreakpoints = {};

      if (propValue.xs)
        breakpoints.xs = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.xs)),
        };
      if (propValue.sm)
        breakpoints.sm = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.sm)),
        };
      if (propValue.md)
        breakpoints.md = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.md)),
        };
      if (propValue.lg)
        breakpoints.lg = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.lg)),
        };
      if (propValue.xl)
        breakpoints.xl = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.xl)),
        };


      return breakpointsMedia(breakpoints);
    }

    if (
      typeof propValue === 'string' ||
      typeof propValue === 'number' ||
      Array.isArray(propValue)
    ) {
      return {
        [propName]: parseValue(theme, propName, valueAdapter(propValue)),
      };
    }

    return {};
  };
}
