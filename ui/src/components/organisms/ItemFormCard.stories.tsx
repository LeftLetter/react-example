import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { StyledComponent } from './ItemFormCard'

export default {
  title: 'Organisms/ItemFormCard',
  component: StyledComponent,
} as ComponentMeta<typeof StyledComponent>

const Template: ComponentStory<typeof StyledComponent> = ({ ...args }) => {
  const { register, reset, handleSubmit } = useForm()

  const onSubmit = () => console.log('OK')

  return (
    <StyledComponent
      register={register}
      reset={reset}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      {...args}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
