import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TopPage } from './TopPage'

export default {
  title: 'Pages/TopPage',
  component: TopPage,
} as ComponentMeta<typeof TopPage>

const Template: ComponentStory<typeof TopPage> = ({ ...args }) => (
  <TopPage {...args} />
)

export const Default = Template.bind({})
Default.args = {}
