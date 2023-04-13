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
} as Meta;

type Props = React.ComponentProps<typeof InteractiveBarChart>;
const Template: Story<Props> = (args) => <InteractiveBarChart {...args} />;

export const BarsAndPictograms = Template.bind({});
BarsAndPictograms.args = {
  color: 'hsl(330, 90%, 60%)',
  categories: [
    { label: 'A', pictogram: <ResponsiveEmoji emoji="🌎" /> },
    { label: 'B', pictogram: <ResponsiveEmoji emoji="🌱" /> },
    { label: 'C', pictogram: <ResponsiveEmoji emoji="🛰️" /> },
  ],
  initialValues: [2, 4, 3],
};

export const PictogramsOnly = Template.bind({});
PictogramsOnly.args = {
  categories: [
    { label: 'A', pictogram: <ResponsiveEmoji emoji="🌎" /> },
    { label: 'B', pictogram: <ResponsiveEmoji emoji="🌱" /> },
    { label: 'C', pictogram: <ResponsiveEmoji emoji="🛰️" /> },
  ],
  initialValues: [2, 4, 3],
};

export const BarsOnly = Template.bind({});
BarsOnly.args = {
  color: 'hsl(330, 90%, 60%)',
  categories: [{ label: 'A' }, { label: 'B' }, { label: 'C' }],
  initialValues: [2, 4, 3],
};
