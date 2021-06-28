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
  caption2: {
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

type TranslateProps =
  | 'home-title-1'
  | 'home-title-2'
  | 'share'
  | 'room'
  | 'room-code'
  | 'room-name'
  | 'copy-room-code'
  | 'copied-clipboard'
  | 'share-via'
  | 'join-room'
  | 'copy-link'
  | 'or-join-room'
  | 'enter-room'
  | 'create-room'
  | 'create-with-google'
  | 'no-room'
  | 'room-has-ended'
  | 'return'
  | 'page-not-found'
  | 'something-wrong'
  | 'enter-existing-room'
  | 'create-new-room'
  | 'room-created'
  | 'invalid-room'
  | 'no-questions-here'
  | 'mark-answered'
  | 'mark-liked'
  | 'highlight-question'
  | 'delete-question'
  | 'must-be-logged'
  | 'deleted-question'
  | 'cancel'
  | 'confirm'
  | 'delete-question-text'
  | 'want-to-ask'
  | 'not-logged-send-question-1'
  | 'not-logged-send-question-2'
  | 'send-question'
  | 'mark-not-liked'
  | 'mark-not-answered'
  | 'question'
  | 'undo'
  | 'missing-google-info'
  | 'end-room'
  | 'ended-room'
  | 'end-room-confirm'
  | 'must-be-owner'
  | 'share-room'
  | 'log-out';
