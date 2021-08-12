import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { cns } from '../../utils/common'
import { ItemForm } from '../../utils/types/ItemForm'

// input要素が本来持つ属性を受け付ける
type Props = JSX.IntrinsicElements['input'] & {
  className?: string
} & ReturnType<UseFormRegister<ItemForm>>

const Component = React.forwardRef<HTMLInputElement, Props>(
  ({ className = '', ...attributes }, ref) => (
    <input
      className={cns('common-input', className)}
      data-testid="common-input" // テスト用
      {...attributes}
      ref={ref}
    />
  )
)
Component.displayName = 'Component'

const StyledComponent = styled(Component)`
  &.common-input {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--color-main);
    color: var(--color-main);

    :disabled {
      background-color: var(--color-main-light);
    }
  }
`

export const CommonInput = StyledComponent
