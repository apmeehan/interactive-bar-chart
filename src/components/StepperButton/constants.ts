enum Symbol {
  MINUS = '\u2212',
  PLUS = '+',
  LEFT_ARROW = '\u2190',
  UP_ARROW = '\u2191',
  RIGHT_ARROW = '\u2192',
  DOWN_ARROW = '\u2193',
  LEFT_POINTING_EMOJI = '👈',
  UP_POINTING_EMOJI = '👆',
  RIGHT_POINTING_EMOJI = '👉',
  DOWN_POINTING_EMOJI = '👇',
}

export enum SymbolCategory {
  MATH = 'math',
  ARROWS = 'arrows',
  EMOJIS = 'emojis',
}

export const BUTTON_SYMBOLS = {
  [SymbolCategory.MATH]: {
    increment: Symbol.PLUS,
    decrement: Symbol.MINUS,
  },
  [SymbolCategory.ARROWS]: {
    increment: Symbol.RIGHT_ARROW,
    decrement: Symbol.LEFT_ARROW,
  },
  [SymbolCategory.EMOJIS]: {
    increment: Symbol.RIGHT_POINTING_EMOJI,
    decrement: Symbol.LEFT_POINTING_EMOJI,
  },
};
