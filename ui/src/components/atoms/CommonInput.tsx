import React from 'react'
import {
  ControllerFieldState,
  ControllerRenderProps,
  Path,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import styled from 'styled-components'
import { cns } from '../../utils/common'

type Props<T> = {
  className?: string
  field: ControllerRenderProps<T, Path<T>>
  fieldState?: ControllerFieldState
}

type ContainerProps<T> = UseControllerProps<T> & {
  className?: string
}

const Component = <T,>({ className = '', field, fieldState }: Props<T>) => (
  <input
    className={cns('common-input', className)}
    data-testid="common-input" // テスト用
    {...field}
  />
)

export const StyledComponent = styled(Component)`
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
` as typeof Component

const Container = <T,>({
  className = '',
  ...attributes
}: ContainerProps<T>): JSX.Element => {
  const { field, fieldState } = useController(attributes)

  return (
    <StyledComponent<string>
      className={className}
      field={field}
      fieldState={fieldState}
    />
  )
}

export const CommonInput = Container
