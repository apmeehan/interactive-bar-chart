import { Meta, Story } from '@storybook/react';
import ResponsiveEmoji from '../../../ResponsiveEmoji';
import { Bar } from './Bar';
import ResizableContainer from '.storybook/decorators/ResizableContainer';

export default {
  title: 'Components/Bar Chart/Bar',
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

const sharedArgs = {
  length: 75,
};

export const Default = Template.bind({});
Default.args = {
  ...sharedArgs,
  color: 'deeppink',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...sharedArgs,
  isPlaceholder: true,
};

export const Pictograms = Template.bind({});
Pictograms.args = {
  ...sharedArgs,
  pictogram: <ResponsiveEmoji emoji="🐶" />,
  pictogramCount: 3,
};

export const PictogramPlaceholders = Template.bind({});
PictogramPlaceholders.args = {
  ...sharedArgs,
  pictogramCount: 3,
  isPlaceholder: true,
};
