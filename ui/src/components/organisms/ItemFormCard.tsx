import React from 'react'
import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import styled from 'styled-components'
import { useItemForm } from '../../hooks/useItemForm'
import { ItemForm } from '../../types/ItemForm'
import { cns } from '../../utils/common'
import { CommonButton } from '../atoms/CommonButton'
import { CommonText } from '../atoms/CommonText'
import { InputWithLabel } from '../molecules/InputWithLabel'

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
      <InputWithLabel methods={methods} name="title" label="Title" />
      <InputWithLabel
        methods={methods}
        name="description"
        label="Description"
      />
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

    > * > .add-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  // react-hook-formの設定諸々を行う
  const { methods, onSubmit } = useItemForm()

  return <StyledComponent {...props} methods={methods} onSubmit={onSubmit} />
}

export const ItemFormCard = Container
