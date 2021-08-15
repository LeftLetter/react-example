import React from 'react'
import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import styled from 'styled-components'
import { useItemForm } from '../../hooks/useItemForm'
import { cns } from '../../utils/common'
import { ItemForm } from '../../utils/types/ItemForm'
import { CommonButton } from '../atoms/CommonButton'
import { CommonInput } from '../atoms/CommonInput'
import { CommonText } from '../atoms/CommonText'

type Props = {
  methods: UseFormReturn<ItemForm>
  onSubmit: SubmitHandler<ItemForm>
} & ContainerProps

type ContainerProps = {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '', methods, onSubmit }) => (
  <div className={cns('item-form-card', className)}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <label htmlFor="title">
        <CommonText>Title</CommonText>
      </label>
      <CommonInput
        control={methods.control}
        id="title"
        name="title"
        className="card-input"
      ></CommonInput>
      <label htmlFor="description">
        <CommonText>Description</CommonText>
      </label>
      <CommonInput
        control={methods.control}
        id="description"
        name="description"
        className="card-input"
      ></CommonInput>
      <CommonText size="small" colorTheme="error">
        {methods.formState.errors.title?.message}
      </CommonText>
      <br />
      <CommonText size="small" colorTheme="error">
        {methods.formState.errors.description?.message}
      </CommonText>

      <CommonButton className="add-button">追加</CommonButton>
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

    > * > .card-input {
      width: 100%;
      margin-bottom: 10px;
    }

    > * > .add-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
`

const Container: React.FC<ContainerProps> = ({ className = '' }) => {
  const { methods, onSubmit } = useItemForm()

  return (
    <StyledComponent
      className={className}
      methods={methods}
      onSubmit={onSubmit}
    />
  )
}

export const ItemFormCard = Container
