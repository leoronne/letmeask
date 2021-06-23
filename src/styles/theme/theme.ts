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
    '60': 'rgba(53, 65, 77, 0.6)',
    '50': 'rgba(53, 65, 77, 0.56)',
    '40': 'rgba(53, 65, 77, 0.40)',
    '30': 'rgba(53, 65, 77, 0.30)',
    '24': 'rgba(53, 65, 77, 0.24)',
    '12': 'rgba(53, 65, 77, 0.12)',
    '08': 'rgba(53, 65, 77, 0.08)',
  },

  white: {
    base: baseWhite,
    '90': 'rgba(255, 255, 255, 0.9)',
    '80': 'rgba(255, 255, 255, 0.8)',
    '70': 'rgba(255, 255, 255, 0.7)',
    '60': 'rgba(255, 255, 255, 0.6)',
    '50': 'rgba(255, 255, 255, 0.56)',
    '40': 'rgba(255, 255, 255, 0.40)',
    '30': 'rgba(255, 255, 255, 0.30)',
    '24': 'rgba(255, 255, 255, 0.24)',
    '12': 'rgba(255, 255, 255, 0.12)',
    '08': 'rgba(255, 255, 255, 0.08)',
  },

  primary: {
    base: '#835AFD',
    text: textColorLight,
  },

  secondary: {
    base: '#ff59f8',
    text: textColorLight,
  },

  danger: {
    base: '#ec5f5f',
    text: '#FFFFFF',
  },

  disabled: {
    base: 'rgba(255, 255, 255, 0.24)',
    text: '#FFFFFF',
  },
};

const transitions: ThemeProperty = {
  easeInOut: {
    slow: '0.9s ease-in-out',
    base: '0.6s ease-in-out',
    fast: '0.3s ease-in-out',
  }
}

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
  small: '4px',
  base: '8px',
  large: '16px',
  extraLarge: '24px',
};

const typography: TypographyProps = {
  heading1: {
    fontFamily: `Poppins, Roboto, sans-serif`,
    fontSize: '36px',
    fontWeight: '600',
    lineHeight: '50px',
    padding: `${spacing['2']} 0`,
  },
  heading2: {
    fontFamily: `Poppins, Roboto, sans-serif`,
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '42px',
    padding: `${spacing['2']} 0`,
  },
  heading3: {
    fontFamily: `Poppins, Roboto, sans-serif`,
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '36px',
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
};

export interface Theme {
  readonly colors: ColorsProps;
  readonly spacing: ThemeProperty;
  readonly borderRadius: ThemeProperty;
  readonly typography: TypographyProps;
  readonly transitions: ThemeProperty;
  readonly space: number[];

  readonly [prop: string]: any;
}

export const theme: Theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  transitions,
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
};
