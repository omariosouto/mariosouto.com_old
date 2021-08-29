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

      if (typeof propValue.xs !== 'undefined')
        breakpoints.xs = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.xs)),
        };
      if (typeof propValue.sm !== 'undefined')
        breakpoints.sm = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.sm)),
        };
      if (typeof propValue.md !== 'undefined')
        breakpoints.md = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.md)),
        };
      if (typeof propValue.lg !== 'undefined')
        breakpoints.lg = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.lg)),
        };
      if (typeof propValue.xl !== 'undefined')
        breakpoints.xl = {
          [propName]: parseValue(theme, propName, valueAdapter(propValue.xl)),
        };

      return breakpointsMedia(breakpoints);
    }

    if (
      typeof propValue === 'string' ||
      typeof propValue === 'number' ||
      typeof propValue === 'boolean' ||
      Array.isArray(propValue)
    ) {
      return {
        [propName]: parseValue(theme, propName, valueAdapter(propValue)),
      };
    }

    return {};
  };
}
