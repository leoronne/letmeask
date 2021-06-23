import deepmerge from 'deepmerge';

import { theme, Theme, ThemeProperty } from './theme';
import { createAccessor } from './accessors';

export const createTheme = (customTheme = {}): Theme => deepmerge(theme, customTheme);

// criando accessors para podermos acessar o tema
// de forma menos verbosa nos componentes
export const typography = createAccessor<ThemeProperty>('typography');
export const colors = createAccessor<ThemeProperty>('colors');
export const spacing = createAccessor<ThemeProperty>('spacing');
export const borderRadius = createAccessor<ThemeProperty>('borderRadius');
export const transitions = createAccessor<ThemeProperty>('transitions');

export * from './theme';
