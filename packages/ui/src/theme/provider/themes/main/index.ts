import createTheme from '../../../createTheme';
import { pallete } from './pallete';

const mainTheme = createTheme({
  colorsDark: pallete.dark,
  colorsLight: pallete.light,
});

export default mainTheme;
