// Cores base para preto e branco
const baseBlack = 'rgb(53, 65, 77)';
const baseWhite = 'rgb(255, 255, 255)';

export const unit = 8;

export const textColor = baseBlack;
export const textColorLight = baseWhite;

export interface LiteralObject {
  [prop: string]: any;
}

export type ThemeProperty = Record<string, any>;

const colors: ColorsProps = {
  black: {
    base: baseBlack,
    '90': 'rgba(53, 65, 77, 0.9)',
    '80': 'rgba(53, 65, 77, 0.8)',
    '70': 'rgba(53, 65, 77, 0.7)',
    '50': 'rgba(53, 65, 77, 0.56)',
    '24': 'rgba(53, 65, 77, 0.24)',
    '12': 'rgba(53, 65, 77, 0.12)',
    '08': 'rgba(53, 65, 77, 0.08)',
  },

  white: {
    base: baseWhite,
    '90': 'rgba(255, 255, 255, 0.9)',
    '80': 'rgba(255, 255, 255, 0.8)',
    '70': 'rgba(255, 255, 255, 0.7)',
    '50': 'rgba(255, 255, 255, 0.56)',
    '24': 'rgba(255, 255, 255, 0.24)',
    '12': 'rgba(255, 255, 255, 0.12)',
    '08': 'rgba(255, 255, 255, 0.08)',
  },

  primary: {
    base: '#835AFD',
    text: textColorLight,
  },

  danger: {
    base: '#ec5f5f',
    text: '#FFFFFF',
  },
};

const spacing: ThemeProperty = {
  '1': `${unit}px`,
  '2': `${unit * 2}px`,
  '3': `${unit * 3}px`,
  '4': `${unit * 4}px`,
  '5': `${unit * 5}px`,
  '6': `${unit * 6}px`,
  '7': `${unit * 7}px`,
  '8': `${unit * 8}px`,
  '9': `${unit * 9}px`,
  '10': `${unit * 10}px`,
  small: `${unit / 2}px`,
  extraSmall: `${unit / 2 / 2}px`,
};

const borderRadius: ThemeProperty = {
  small: '2px',
  base: '6px',
  large: '12px',
  extraLarge: '24px',
};

const typography: ThemeProperty = {
  body1: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '0',
    lineHeight: '22px',
  },
  caption1: {
    fontSize: '13px',
    fontWeight: '400',
    letterSpacing: '0',
    lineHeight: '20px',
  },
  caption2: {
    fontSize: '12px',
    fontWeight: '400',
    letterSpacing: '0',
    lineHeight: '16px',
  },
  heading1: {
    fontFamily: `Poppins, Roboto, sans-serif`,
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '50px',
    padding: `${spacing['2']} 0`,
  },
  heading6: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '32px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '500',
    lineHeight: 'unset',
    letterSpacing: 'unset',
  },
  subtitle1: {
    fontSize: '24px',
    fontWeight: '500',
    letterSpacing: '-0.01em',
    lineHeight: '48px',
    marginBottom: `${spacing['2']}`,
    paddingTop: `${spacing['1']}`,
    paddingBottom: `${spacing['1']}`,
  },
  subtitle2: {
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '-0.35px',
  },
  subtitle3: {
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '-0.30px',
  },
  button: {
    fontSize: '16px',
    letterSpacing: '-0.2px',
    textTransform: 'none',
    fontWeight: '500',
  },
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export interface Theme {
  readonly colors: ThemeProperty;
  readonly spacing: ThemeProperty;
  readonly borderRadius: ThemeProperty;
  readonly typography: ThemeProperty;
  readonly space: number[];

  readonly [prop: string]: any;
}

export const theme: Theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
};
