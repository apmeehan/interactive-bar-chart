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

export const Default = Template.bind({});
Default.args = {
  categories: ['A', 'B', 'C'],
  series: [{ values: [2, 3, 4] }],
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

export const WithFixedAxis = Template.bind({});
WithFixedAxis.args = {
  ...MultipleSeries.args,
  max: 10,
};

export const WithPictograms = Template.bind({});
WithPictograms.args = {
  ...Default.args,
  pictograms: [
    <ResponsiveEmoji emoji="🍋" />,
    <ResponsiveEmoji emoji="🥬" />,
    <ResponsiveEmoji emoji="🍅" />,
  ],
};
