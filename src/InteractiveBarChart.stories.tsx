import { Meta, Story } from '@storybook/react';
import InteractiveBarChart from './InteractiveBarChart';
import { ResponsiveEmoji } from './components';
import ResizableContainer from '.storybook/decorators/ResizableContainer';

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
} as Meta;

type Props = React.ComponentProps<typeof InteractiveBarChart>;
const Template: Story<Props> = (args) => <InteractiveBarChart {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  categories: ['Dresses', 'Jackets', 'Shirts'],
  initialValues: [1, 2, 3],
  targetValues: [],
  color: 'deeppink',
};

export const WithTargetValues = Template.bind({});
WithTargetValues.args = {
  ...Regular.args,
  targetValues: [4, 4, 4],
};

export const Pictograms = Template.bind({});
Pictograms.args = {
  ...Regular.args,
  pictograms: [
    <ResponsiveEmoji emoji="👗" />,
    <ResponsiveEmoji emoji="🧥" />,
    <ResponsiveEmoji emoji="👚" />,
  ],
};

export const PictogramsWithTargetValues = Template.bind({});
PictogramsWithTargetValues.args = {
  ...Pictograms.args,
  ...WithTargetValues.args,
};
