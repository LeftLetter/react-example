import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CardContextProvider } from '../../contexts/cardContext'
import { ItemFormCard } from './ItemFormCard'

export default {
  title: 'Organisms/ItemFormCard',
  component: ItemFormCard,
} as ComponentMeta<typeof ItemFormCard>

const Template: ComponentStory<typeof ItemFormCard> = ({ ...args }) => (
  <CardContextProvider>
    <ItemFormCard {...args} />
  </CardContextProvider>
)

export const Default = Template.bind({})
Default.args = {}
