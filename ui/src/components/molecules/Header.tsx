import React from 'react'
import styled from 'styled-components'
import { cns } from '../../utils/common'
import { CommonText } from '../atoms/CommonText'

type Props = {
  className?: string
  children: React.ReactNode
}

const Component: React.VFC<Props> = ({ className = '', children }) => (
  <header className={cns('header', className)}>
    <CommonText
      size="large"
      colorTheme="sub"
      className="header-text"
      data-testid="header" // テスト用
    >
      {children}
    </CommonText>
  </header>
)

const StyledComponent = styled(Component)`
  --line-height: 60px;

  &.header {
    position: fixed;
    width: 100%;
    height: var(--line-height);
    padding-left: 10px;
    padding-right: 10px;
    background-color: var(--color-main);

    > .header-text {
      line-height: var(--line-height);
    }
  }
`

export const Header = StyledComponent
