import { Meta, Story } from '@storybook/react';
import ResizableContainer from './ResizableContainer';

export default {
  title: 'Components/ResizableContainer',
  component: ResizableContainer,
} as Meta;

type Props = React.ComponentProps<typeof ResizableContainer>;
const Template: Story<Props> = (args) => (
  <ResizableContainer {...args}>
    <div
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      }}
    >
      CONTENT
    </div>
  </ResizableContainer>
);

export const Default = Template.bind({});
