import React from 'react'
import styled from 'styled-components'

// button要素が本来持つ属性+テキスト+テーマを受け付ける
type Props = Omit<JSX.IntrinsicElements['button'], 'ref'> & {
  className?: string
  children: React.ReactNode
  theme?: 'primary' | 'secondary' | 'error'
}

const Component: React.VFC<Props> = ({
  className,
  children,
  theme = 'primary',
  ...attributes
}) => (
  <button
    className={['common-button', theme, className].join(' ')}
    data-testid="common-button" // テスト用
    {...attributes}
  >
    {children}
  </button>
)

const StyledComponent = styled(Component)`
  &.common-button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: var(--color-main-light);
  }

  &.primary {
    background-color: var(--color-primary);
    :hover {
      background-color: var(--color-primary-dark);
    }
  }

  &.secondary {
    background-color: var(--color-secondary);
    :hover {
      background-color: var(--color-secondary-dark);
    }
  }

  &.error {
    background-color: var(--color-error);
    :hover {
      background-color: var(--color-error-dark);
    }
  }
`

export const CommonButton = StyledComponent
