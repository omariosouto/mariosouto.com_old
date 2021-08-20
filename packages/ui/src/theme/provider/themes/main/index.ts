import createTheme from '../../../createTheme';
import { devSoutinhoColorTheme } from '../../../colors/themes/devsoutinho';

const mainTheme = createTheme({
  colorsLight: devSoutinhoColorTheme.light,
  colorsDark: devSoutinhoColorTheme.dark,
});

export default mainTheme;
