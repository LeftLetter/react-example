import React from 'react'
import {
  Control,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form'
import styled from 'styled-components'
import { useCard } from '../../hooks/useCard'
import { cns } from '../../utils/common'
import { ItemForm } from '../../utils/types/ItemForm'
import { CommonButton } from '../atoms/CommonButton'
import { CommonInput } from '../atoms/CommonInput'

type Props = {
  control: Control<ItemForm>
  register: UseFormRegister<ItemForm>
  reset: UseFormReset<ItemForm>
  handleSubmit: UseFormHandleSubmit<ItemForm>
  onSubmit: SubmitHandler<ItemForm>
} & ContainerProps

type ContainerProps = {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '', ...props }) => (
  <div className={cns('item-form-card', className)}>
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <CommonInput<ItemForm>
        control={props.control}
        name="title"
        rules={{ required: true }}
      ></CommonInput>
      <CommonInput<ItemForm>
        control={props.control}
        name="description"
        rules={{ required: true }}
      ></CommonInput>
      <CommonButton>追加</CommonButton>
    </form>
  </div>
)

export const StyledComponent = styled(Component)`
  &.item-form-card {
    position: relative;
    min-width: 300px;
    width: 300px;
    min-height: 300px;
    height: 300px;
    border: 2px dashed var(--color-main);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  const { control, register, reset, handleSubmit } = useForm<ItemForm>({
    defaultValues: { title: '', description: '' },
  })
  const { setCards } = useCard()

  const onSubmit: SubmitHandler<ItemForm> = (data) => {
    ;(async () => {
      let isOK = true
      const response = await fetch('api/v1', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch(() => {
        isOK = false
      })

      if (isOK && response instanceof Response) {
        const responseObj = await response.json()
        setCards(responseObj)
        reset()
      }
    })()
  }

  return (
    <StyledComponent
      {...props}
      control={control}
      register={register}
      reset={reset}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  )
}

export const ItemFormCard = Container
