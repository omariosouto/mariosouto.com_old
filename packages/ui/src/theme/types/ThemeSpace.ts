const space = {
  x0: 'x0',
  x0_5: 'x0_5',
  x1: 'x1',
  x1_5: 'x1_5',
  x2: 'x2',
  x2_5: 'x2_5',
  x3: 'x3',
  x3_5: 'x3_5',
  x4: 'x4',
  x5: 'x5',
  x6: 'x6',
};

export type ThemeSpaceNames = keyof typeof space;
export type ThemeSpace = Record<ThemeSpaceNames, string | number>;
