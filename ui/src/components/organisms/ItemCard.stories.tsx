import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledComponent } from './ItemCard'

export default {
  title: 'Organisms/ItemCard',
  component: StyledComponent,
} as ComponentMeta<typeof StyledComponent>

const Template: ComponentStory<typeof StyledComponent> = ({ ...args }) => (
  <StyledComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  card: {
    id: '0',
    title: 'Test Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
}

export const Long = Template.bind({})
Long.args = {
  card: {
    id: '0',
    title: 'Very Long Long Long Long Long Long Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
}
