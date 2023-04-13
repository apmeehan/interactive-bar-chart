import { Meta, Story } from '@storybook/react';
import ResponsiveEmoji from '../ResponsiveEmoji';
import BarChart from './BarChart';
import ResizableContainer from '.storybook/decorators';

export default {
  title: 'Components/Bar Chart',
  component: BarChart,
  decorators: [
    (Story) => (
      <ResizableContainer height={400} width={400}>
        <Story />
      </ResizableContainer>
    ),
  ],
  argTypes: {
    max: {
      control: {
        type: 'range',
        max: 20,
        min: 0,
      },
    },
  },
} as Meta;

type Props = React.ComponentProps<typeof BarChart>;
const Template: Story<Props> = (args) => <BarChart {...args} />;

export const SingleSeries = Template.bind({});
SingleSeries.args = {
  categories: ['A', 'B', 'C'],
  series: [{ values: [2, 3, 4], color: 'hsl(330, 90%, 60%)' }],
};

export const Pictograms = Template.bind({});
Pictograms.args = {
  categories: ['A', 'B', 'C'],
  series: [{ values: [2, 3, 4] }],
  pictograms: [
    <ResponsiveEmoji emoji="🍋" />,
    <ResponsiveEmoji emoji="🥬" />,
    <ResponsiveEmoji emoji="🍅" />,
  ],
};

export const MultipleSeries = Template.bind({});
MultipleSeries.args = {
  categories: ['A', 'B'],
  series: [
    { values: [3, 2], color: 'skyblue' },
    { values: [4, 1], color: 'lightpink' },
    { values: [5, 3], color: 'white' },
  ],
};

export const FixedAxis = Template.bind({});
FixedAxis.args = {
  ...MultipleSeries.args,
  max: 10,
};
