import { Meta, Story } from '@storybook/react';
import InteractiveBarChart from './InteractiveBarChart';
import { ResponsiveEmoji } from './components';
import ResizableContainer from '.storybook/decorators';

export default {
  title: 'Interactive Bar Chart',
  component: InteractiveBarChart,
  decorators: [
    (Story) => (
      <ResizableContainer height={500} width={500}>
        <Story />
      </ResizableContainer>
    ),
  ],
  argTypes: {
    max: {
      control: {
        type: 'range',
        max: 10,
        min: 0,
      },
    },
  },
} as Meta;

type Props = React.ComponentProps<typeof InteractiveBarChart>;
const Template: Story<Props> = (args) => <InteractiveBarChart {...args} />;

export const Bars = Template.bind({});
Bars.args = {
  categories: [{ label: 'A' }, { label: 'B' }, { label: 'C' }],
  initialValues: [2, 4, 3],
};

export const Pictograms = Template.bind({});
Pictograms.args = {
  categories: [
    { label: 'A', pictogram: <ResponsiveEmoji emoji="✈️" /> },
    { label: 'B', pictogram: <ResponsiveEmoji emoji="🌍" /> },
    { label: 'C', pictogram: <ResponsiveEmoji emoji="🕺🏻" /> },
  ],
  initialValues: [2, 4, 3],
};

export const WithFixedAxis = Template.bind({});
WithFixedAxis.args = {
  max: 8,
  categories: [
    { label: 'A', pictogram: <ResponsiveEmoji emoji="✈️" /> },
    { label: 'B', pictogram: <ResponsiveEmoji emoji="🌍" /> },
    { label: 'C', pictogram: <ResponsiveEmoji emoji="🕺🏻" /> },
  ],
  initialValues: [2, 4, 3],
};
