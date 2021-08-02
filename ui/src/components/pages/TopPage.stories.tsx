import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledComponent } from './TopPage'

export default {
  title: 'Pages/TopPage',
  component: StyledComponent,
} as ComponentMeta<typeof StyledComponent>

const Template: ComponentStory<typeof StyledComponent> = ({ ...args }) => (
  <StyledComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  cards: [
    { id: '0', title: 'aaa', description: 'aaa' },
    { id: '1', title: 'aaa', description: 'aaa' },
    { id: '2', title: 'aaa', description: 'aaa' },
    { id: '3', title: 'aaa', description: 'aaa' },
    { id: '4', title: 'aaa', description: 'aaa' },
  ],
}
