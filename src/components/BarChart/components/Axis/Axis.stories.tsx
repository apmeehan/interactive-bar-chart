import { Meta, Story } from '@storybook/react';
import { Axis } from './Axis';
import ResizableContainer from '.storybook/decorators';

export default {
  title: 'Components/Bar Chart/Components/Axis',
  component: Axis,
  decorators: [
    (Story) => (
      <ResizableContainer height={400} width={400}>
        <Story />
      </ResizableContainer>
    ),
  ],
} as Meta;

type Props = React.ComponentProps<typeof Axis>;
const Template: Story<Props> = (args) => <Axis {...args} />;

export const X = Template.bind({});
X.args = {
  dimension: 'x',
  labels: [1, 2, 3, 'four', '🖐'],
};

export const Y = Template.bind({});
Y.args = {
  dimension: 'y',
  labels: [1, 2, 3, 'four', '🖐'],
};
