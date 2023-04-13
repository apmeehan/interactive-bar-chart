type Symbol =
  | '\u2212'
  | '+'
  | '\u2190'
  | '\u2191'
  | '\u2192'
  | '\u2193'
  | '👈'
  | '👆'
  | '👉'
  | '👇';

export type SymbolCategory = 'maths' | 'arrows' | 'emojis';

export const BUTTON_SYMBOLS: {
  [key in SymbolCategory]: {
    increment: Symbol;
    decrement: Symbol;
  };
} = {
  maths: {
    increment: '+',
    decrement: '−',
  },
  arrows: {
    increment: '↑',
    decrement: '↓',
  },
  emojis: {
    increment: '👆',
    decrement: '👇',
  },
};
