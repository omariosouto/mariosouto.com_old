const partition = {
  'x1/1': '1/1',
  'x1/2': '1/2',
  'x1/3': '1/3',
  'x2/3': '2/3',
  'x1/4': '1/4',
  'x2/4': '2/4',
  'x3/4': '3/4',
  'x1/5': '1/5',
  'x2/5': '2/5',
  'x3/5': '3/5',
  'x4/5': '4/5',
  'x1/6': '1/6',
  'x2/6': '2/6',
  'x3/6': '3/6',
  'x4/6': '4/6',
  'x5/6': '5/6',
  'x1/12': '1/12',
  'x2/12': '2/12',
  'x3/12': '3/12',
  'x4/12': '4/12',
  'x5/12': '5/12',
  'x6/12': '6/12',
  'x7/12': '7/12',
  'x8/12': '8/12',
  'x9/12': '9/12',
  'x10/12': '10/12',
  'x11/12': '11/12',
};

const container = {
  xcontainer_xs: 'xcontainer_xs',
  xcontainer_sm: 'xcontainer_sm',
  xcontainer_md: 'xcontainer_md',
  xcontainer_lg: 'xcontainer_lg',
  xcontainer_xl: 'xcontainer_xl',
};

const space = {
  x0: '0',
  xpx: '1',
  'x0.5': '0.5',
  x1: '1',
  'x1.5': '1.5',
  x2: '2',
  'x2.5': '2.5',
  x3: '3',
  'x3.5': '3.5',
  x4: '4',
  x5: '5',
  x6: '6',
  x7: '7',
  x8: '8',
  x9: '9',
  x10: '10',
  x11: '11',
  x12: '12',
  x14: '14',
  x16: '16',
  x20: '20',
  x24: '24',
  x28: '28',
  x32: '32',
  x36: '36',
  x40: '40',
  x44: '44',
  x48: '48',
  x52: '52',
  x56: '56',
  x60: '60',
  x64: '64',
  x72: '72',
  x80: '80',
  x96: '96',
  ...partition,
  ...container,
};

export type SpaceThemeNames = keyof typeof space;
export type SpaceTheme = Record<SpaceThemeNames, string | number>;
