import { Meta, Story } from '@storybook/react';
import ResponsiveEmoji from '../ResponsiveEmoji';
import BarChart from './BarChart';
import ResizableContainer from '.storybook/decorators/ResizableContainer';

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
  series: [{ values: [2, 3, 4], color: 'deeppink' }],
};

export const MultipleSeries = Template.bind({});
MultipleSeries.args = {
  categories: ['A', 'B'],
  series: [
    { values: [3, 2], color: 'hsl(43, 98%, 52%)' },
    { values: [4, 1], color: 'hsl(157, 100%, 21%)' },
    { values: [5, 3], color: 'hsl(357, 70%, 45%)' },
  ],
};

export const WithPlaceholders = Template.bind({});
WithPlaceholders.args = {
  ...MultipleSeries.args,
  series: [
    { values: [3, 2], placeholders: [0, 3], color: 'hsl(43, 98%, 52%)' },
    { values: [4, 1], placeholders: [0, 4], color: 'hsl(157, 100%, 21%)' },
    { values: [5, 3], placeholders: [0, 5], color: 'hsl(357, 70%, 45%)' },
  ],
};

export const WithCustomAxisScale = Template.bind({});
WithCustomAxisScale.args = {
  max: 10,
  ...WithPlaceholders.args,
};

export const Pictograms = Template.bind({});
Pictograms.args = {
  ...Default.args,
  pictograms: [
    <ResponsiveEmoji emoji="🍋" />,
    <ResponsiveEmoji emoji="🥬" />,
    <ResponsiveEmoji emoji="🍅" />,
  ],
};

export const PictogramsWithPlaceholders = Template.bind({});
PictogramsWithPlaceholders.args = {
  ...Pictograms.args,
  series: [{ values: [2, 3, 4], placeholders: [4, 4, 4] }],
};
