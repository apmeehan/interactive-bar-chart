import { Meta, Story } from '@storybook/react';
import StepperButton from './StepperButton';
import { SymbolCategory } from './constants';

export default {
  title: 'Components/Stepper Button',
  component: StepperButton,
} as Meta;

type Props = React.ComponentProps<typeof StepperButton>;
const Template: Story<Props> = (args) => <StepperButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  symbolCategory: SymbolCategory.MATH,
};

export const MaxValueReached = Template.bind({});
MaxValueReached.args = {
  max: 10,
  value: 10,
};

export const MinValueReached = Template.bind({});
MinValueReached.args = {
  min: 10,
  value: 10,
};
