import { Meta, Story } from '@storybook/react';
import ResponsiveEmoji from './ResponsiveEmoji';
import ResizableContainer from '.storybook/decorators';

export default {
  title: 'Components/Responsive Emoji',
  component: ResponsiveEmoji,
  decorators: [
    (Story) => (
      <ResizableContainer height={150} width={150}>
        <Story />
      </ResizableContainer>
    ),
  ],
  argTypes: {
    emoji: {
      options: ['🚀', '👻', '🤖', '👠', '🦋', '🐙'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = React.ComponentProps<typeof ResponsiveEmoji>;
const Template: Story<Props> = (args) => <ResponsiveEmoji {...args} />;

export const Default = Template.bind({});
Default.args = {
  emoji: '🚀',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  hue: 330,
};
CustomColor.argTypes = {
  hue: {
    control: {
      type: 'range',
      max: 360,
      min: 0,
    },
  },
};
