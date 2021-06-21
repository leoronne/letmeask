interface ColorsProps {
  primary: {
    base: string;
    text: string;
  };
  danger: {
    base: string;
    text: string;
  };
  black: {
    base: string;
    '90': string;
    '80': string;
    '70': string;
    '50': string;
    '24': string;
    '12': string;
    '08': string;
  };
  white: {
    base: string;
    '90': string;
    '80': string;
    '70': string;
    '50': string;
    '24': string;
    '12': string;
    '08': string;
  };
}

interface ThemeProps {
  theme: {
    colors: ColorsProps;
    typography: {
      heading1: {
        [key: string]: string | number;
      };
      heading6: {
        [key: string]: string | number;
      };
      title: {
        [key: string]: string | number;
      };
    };
  };
}
