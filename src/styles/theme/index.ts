import deepmerge from 'deepmerge';

import { theme, Theme } from './theme';

export const createTheme = (customTheme = {}): Theme => deepmerge(theme, customTheme);

export * from './theme';
