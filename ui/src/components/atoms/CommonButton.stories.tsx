import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledComponent as CommonButton } from './CommonButton'

export default {
  title: 'Atoms/CommonButton',
  component: CommonButton,
} as ComponentMeta<typeof CommonButton>

const Template: ComponentStory<typeof CommonButton> = (args) => (
  <CommonButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  colorTheme: 'primary',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  colorTheme: 'secondary',
  disabled: false,
}

export const Error = Template.bind({})
Error.args = {
  children: 'Button',
  colorTheme: 'error',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Button',
  colorTheme: 'primary',
  disabled: true,
}
