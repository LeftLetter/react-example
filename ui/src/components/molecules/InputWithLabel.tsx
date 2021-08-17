import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import styled from 'styled-components'
import { cns } from '../../utils/common'
import { ItemForm } from '../../utils/types/ItemForm'
import { CommonInput } from '../atoms/CommonInput'
import { CommonText } from '../atoms/CommonText'

type Props = {
  className?: string
  methods: UseFormReturn<ItemForm>
  name: 'title' | 'description'
  label: string
}

const Component: React.VFC<Props> = ({
  className = '',
  methods,
  name,
  label,
}) => (
  <div className={cns('input-with-label', className)}>
    <label htmlFor={name}>
      <CommonText>{label}</CommonText>
    </label>
    <CommonInput
      control={methods.control}
      id={name}
      name={name}
      className="card-input"
    ></CommonInput>
  </div>
)

export const StyledComponent = styled(Component)`
  > .card-input {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const InputWithLabel = StyledComponent
