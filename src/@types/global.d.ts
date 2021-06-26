interface ColorsProps {
  primary: {
    base: string;
    text: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
  secondary: {
    base: string;
    text: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
  danger: {
    base: string;
    text: string;
  };
  disabled: {
    base: string;
    text: string;
  };
  background: {
    base: string;
  };
  black: {
    base: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
  white: {
    base: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
}

interface TypographyProps {
  heading1: {
    [key: string]: string | number;
  };
  heading2: {
    [key: string]: string | number;
  };
  heading3: {
    [key: string]: string | number;
  };
  heading4: {
    [key: string]: string | number;
  };
  heading6: {
    [key: string]: string | number;
  };
  caption1: {
    [key: string]: string | number;
  };
}

interface SpacingProps {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  small: string;
  extraSmall: string;
}

interface BorderRadiusProps {
  small: string;
  base: string;
  large: string;
  extraLarge: string;
}

interface ThemeProps {
  theme: {
    borderRadius: BorderRadiusProps;
    colors: ColorsProps;
    spacing: SpacingProps;
    transitions: {
      easeInOut: {
        slow: string;
        base: string;
        fast: string;
      };
    };
    typography: TypographyProps;
  };
}

interface Question {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  hasLiked: boolean;
  likeId: string | undefined;
  createdAt: string;
}

interface FirabaseQuestions {
  [key: string]: {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes?: {
      [key: string]: {
        authorId: string;
      };
    };
    createdAt: string;
  };
}
