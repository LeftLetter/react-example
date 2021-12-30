import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledComponent as CommonInput } from './CommonInput'

export default {
  title: 'Atoms/CommonInput',
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>

const Template: ComponentStory<typeof CommonInput> = (args) => (
  <CommonInput {...args} />
)

export const Text = Template.bind({})
Text.args = { placeholder: '入力してください...' }
