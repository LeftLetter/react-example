import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommonText } from './CommonText'

export default {
  title: 'Atoms/CommonText',
  component: CommonText,
} as ComponentMeta<typeof CommonText>

const Template: ComponentStory<typeof CommonText> = ({ ...args }) => (
  <CommonText {...args} />
)

export const Small = Template.bind({})
Small.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  colorTheme: 'normal',
  size: 'small',
}

export const MediumError = Template.bind({})
MediumError.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  colorTheme: 'error',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  colorTheme: 'normal',
  size: 'large',
}
