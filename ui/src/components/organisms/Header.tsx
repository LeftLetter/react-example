import React from 'react'
import styled from 'styled-components'
import { cns } from '../../utils/common'
import { PageLink } from '../atoms/PageLink'

type Props = {
  className?: string
  children: React.ReactNode
}

const Component: React.VFC<Props> = ({ className = '', children }) => (
  <header className={cns('header', className)} data-testid="header">
    <PageLink to="/" size="large" colorTheme="sub" className="title">
      {children}
    </PageLink>
    <div className="sub-link-container">
      <PageLink to="/form" className="link">
        Form
      </PageLink>
      <PageLink to="/graph" className="link">
        Graph
      </PageLink>
    </div>
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
    z-index: 1;
    line-height: var(--line-height);
    display: flex;
    justify-content: space-between;

    > .title {
      display: inline-block;
      width: 400px;
    }

    > .sub-link-container {
      flex: 1;
      justify-content: space-around;
      text-align: right;

      > .link {
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
`

export const Header = StyledComponent
