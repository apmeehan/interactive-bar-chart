import { Meta, Story } from '@storybook/react';
import ResponsiveEmoji from '../../../ResponsiveEmoji';
import { Bar } from './Bar';
import ResizableContainer from '.storybook/decorators';

export default {
  title: 'Components/Bar Chart/Components/Bar',
  component: Bar,
  decorators: [
    (Story) => (
      <ResizableContainer height={300} width={100}>
        <Story />
      </ResizableContainer>
    ),
  ],
  argTypes: {
    length: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    pictogram: {
      control: false,
    },
    pictogramCount: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
      },
    },
  },
} as Meta;

type Props = React.ComponentProps<typeof Bar>;
const Template: Story<Props> = (args) => <Bar {...args} />;

export const Default = Template.bind({});
Default.args = {
  length: 75,
};

export const Pictograms = Template.bind({});
Pictograms.args = {
  length: 75,
  pictogram: <ResponsiveEmoji emoji="🐶" />,
  pictogramCount: 3,
};
