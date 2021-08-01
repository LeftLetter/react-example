import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommonInput } from './CommonInput'

export default {
  title: 'Atoms/CommonInput',
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>

const Template: ComponentStory<typeof CommonInput> = (args) => (
  <CommonInput {...args} />
)

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  disabled: false,
}
