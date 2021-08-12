import React from 'react'
import styled from 'styled-components'
import { CardContextProvider } from '../../contexts/cardContext'
import { Header } from '../molecules/Header'
import { MainContents } from '../organisms/MainContents'

type Props = ContainerProps

type ContainerProps = {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '' }) => (
  <div className={className}>
    <Header>React Example</Header>
    <CardContextProvider>
      <MainContents></MainContents>
    </CardContextProvider>
  </div>
)

export const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export const TopPage = Container
