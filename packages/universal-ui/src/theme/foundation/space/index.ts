import { SpaceTheme } from './types';

export type { SpaceTheme, SpaceThemeNames } from './types';

const partition = {
  'x1/1': '100%',
  'x1/2': '50%',
  'x1/3': '33.333333%',
  'x2/3': '66.666667%',
  'x1/4': '25%',
  'x2/4': '50%',
  'x3/4': '75%',
  'x1/5': '20%',
  'x2/5': '40%',
  'x3/5': '60%',
  'x4/5': '80%',
  'x1/6': '16.666667%',
  'x2/6': '33.333333%',
  'x3/6': '50%',
  'x4/6': '66.666667%',
  'x5/6': '83.333333%',
  'x1/12': '8.333333%',
  'x2/12': '16.666667%',
  'x3/12': '25%',
  'x4/12': '33.333333%',
  'x5/12': '41.666667%',
  'x6/12': '50%',
  'x7/12': '58.333333%',
  'x8/12': '66.666667%',
  'x9/12': '75%',
  'x10/12': '83.333333%',
  'x11/12': '91.666667%',
};

const container = {
  xcontainer_xs: '0'      /* 0 */,
  xcontainer_sm: '640px'  /* 40rem */,
  xcontainer_md: '768px'  /* 48rem */,
  xcontainer_lg: '1024px' /* 64rem */,
  xcontainer_xl: '1280px' /* 80rem */,
};

const defaultSpace: SpaceTheme = {
  ...partition,
  ...container,
  x0: '0',
  'x0.5': '2px', // 0.125rem
  x1: '0.25rem',
  'x1.5': '0.375rem',
  x2: '8px', // 0.5rem
  'x2.5': '0.625rem',
  x3: '0.75rem',
  'x3.5': '0.875rem',
  x4: '1rem',
  x5: '1.25rem',
  x6: '1.5rem',
  x7: '1.75rem',
  x8: '2rem',
  x9: '2.25rem',
  x10: '2.5rem',
  x11: '2.75rem',
  x12: '3rem',
  x14: '3.5rem',
  x16: '4rem',
  x20: '80px', // 5rem
  x24: '96px', // 6rem
  x28: '7rem',
  x32: '8rem',
  x36: '9rem',
  x40: '10rem',
  x44: '11rem',
  x48: '12rem',
  x52: '13rem',
  x56: '14rem',
  x60: '15rem',
  x64: '16rem',
  x72: '18rem',
  x80: '20rem',
  x96: '384px', // 24rem
};

export default defaultSpace;
