import '../src/base.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // sort: 'requiredFirst',
  },
  backgrounds: {
    default: 'dark',
  },
  // Workaround for https://github.com/storybookjs/storybook/issues/12596
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};
