import { ThemeTypography } from '../types/ThemeTypography';
import { fontSize, fontWeight, tracking } from './values';

const display = {
  display_1: {
    xs: {
      ...fontSize.text_4xl,
      fontWeight: fontWeight.extrabold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_6xl,
      fontWeight: fontWeight.extrabold,
      letterSpacing: tracking.tight,
    },
  },
};

const heading = {
  heading_1: {
    xs: {
      ...fontSize.text_4xl,
      letterSpacing: tracking.tight,
      fontWeight: fontWeight.extrabold,
    },
    md: {
      ...fontSize.text_5xl,
      fontWeight: fontWeight.extrabold,
    },
  },
  heading_2: {
    xs: {
      ...fontSize.text_2xl,
      letterSpacing: tracking.tight,
      fontWeight: fontWeight.bold,
    },
    md: {
      ...fontSize.text_4xl,
      fontWeight: fontWeight.bold,
    },
  },
  heading_3: {
    xs: {
      ...fontSize.text_xl,
      letterSpacing: tracking.tight,
      fontWeight: fontWeight.bold,
    },
    md: {
      ...fontSize.text_3xl,
      fontWeight: fontWeight.bold,
    },
  },
  heading_4: {
    xs: {
      ...fontSize.text_xl,
      fontWeight: fontWeight.bold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_base,
      fontWeight: fontWeight.bold,
    },
  },
  heading_5: {
    xs: {
      ...fontSize.text_sm,
      fontWeight: fontWeight.bold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_base,
      fontWeight: fontWeight.bold,
    },
  },
  heading_6: {
    xs: {
      ...fontSize.text_xs,
      fontWeight: fontWeight.bold,
      letterSpacing: tracking.tight,
    },
    md: {
      ...fontSize.text_sm,
      fontWeight: fontWeight.bold,
    },
  },
};

const body = {
  body_1: {
    xs: {
      ...fontSize.text_lg,
    },
    md: {
      ...fontSize.text_lg,
    },
  },
  body_2: {
    xs: {
      ...fontSize.text_base,
    },
    md: {
      ...fontSize.text_base,
    },
  },
  body_3: {
    xs: {
      ...fontSize.text_sm,
    },
    md: {
      ...fontSize.text_sm,
    },
  },
  body_4: {
    xs: {
      ...fontSize.text_xs,
    },
    md: {
      ...fontSize.text_xs,
    },
  },
};

export const defaultTypography: ThemeTypography = {
  ...display,
  ...heading,
  ...body,
};
