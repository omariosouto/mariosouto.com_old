import createTheme from '../../../createTheme';
import { createDevSoutinhoColorTheme } from '../../../colors/themes/devsoutinho';

const mainTheme = createTheme({
  colorsLight: createDevSoutinhoColorTheme({}),
  colorsDark: createDevSoutinhoColorTheme({ mode: 'dark' }),
});

export default mainTheme;
