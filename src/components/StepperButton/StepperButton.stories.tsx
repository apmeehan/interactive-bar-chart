import { Meta, Story } from '@storybook/react';
import StepperButton from './StepperButton';
import ResizableContainer from '.storybook/decorators';

export default {
  title: 'Components/Stepper Button',
  component: StepperButton,
  decorators: [
    (Story) => (
      <ResizableContainer>
        <Story />
      </ResizableContainer>
    ),
  ],
} as Meta;

type Props = React.ComponentProps<typeof StepperButton>;
const Template: Story<Props> = (args) => <StepperButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'hsl(330, 90%, 60%)',
};

export const Arrows = Template.bind({});
Arrows.args = {
  symbolCategory: 'arrows',
  color: 'hsl(330, 90%, 60%)',
};

export const Emojis = Template.bind({});
Emojis.args = {
  symbolCategory: 'emojis',
  color: 'hsl(330, 90%, 60%)',
};

export const MaxValueReached = Template.bind({});
MaxValueReached.args = {
  color: 'hsl(330, 90%, 60%)',
  max: 10,
  value: 10,
};

export const MinValueReached = Template.bind({});
MinValueReached.args = {
  color: 'hsl(330, 90%, 60%)',
  min: 10,
  value: 10,
};
