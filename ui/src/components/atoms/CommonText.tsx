import React from 'react'
import styled from 'styled-components'
import { cns } from '../../utils/common'

// span要素が本来持つ属性+テキスト+テーマを受け付ける
type Props = JSX.IntrinsicElements['span'] & {
  className?: string
  children: React.ReactNode
  colorTheme?: 'normal' | 'error' | 'sub'
  size?: 'small' | 'medium' | 'large'
}

const Component: React.VFC<Props> = ({
  className = '',
  children,
  colorTheme = 'normal',
  size = 'medium',
  ...attributes
}) => (
  <span
    className={cns('common-text', colorTheme, size, className)}
    data-testid="common-text" // テスト用
    {...attributes}
  >
    {children}
  </span>
)

const StyledComponent = styled(Component)`
  &.normal {
    color: var(--color-main);
  }

  &.error {
    color: var(--color-error);
  }

  &.sub {
    color: var(--color-sub);
  }

  &.small {
    font-size: var(--font-size-small);
  }

  &.medium {
    font-size: var(--font-size-medium);
  }

  &.large {
    font-size: var(--font-size-large);
  }
`

export const CommonText = StyledComponent
