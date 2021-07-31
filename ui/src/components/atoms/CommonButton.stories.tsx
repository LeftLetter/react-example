// import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommonButton } from './CommonButton'

export default {
  title: 'Atoms/CommonButton',
  component: CommonButton,
} as ComponentMeta<typeof CommonButton>

const Template: ComponentStory<typeof CommonButton> = ({ ...args }) => (
  <CommonButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  theme: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary',
}

export const Large = Template.bind({})
Large.args = {
  theme: 'error',
}
