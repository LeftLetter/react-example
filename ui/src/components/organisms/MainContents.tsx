import React from 'react'
import styled from 'styled-components'
import { Cards } from '../../contexts/cardContext'
import { useCard } from '../../hooks/useCard'
import { useCardFetch } from '../../hooks/useCardFetch'
import { cns } from '../../utils/common'
import { ItemCard } from '../organisms/ItemCard'
import { ItemFormCard } from './ItemFormCard'

type Props = { cards: Cards } & ContainerProps

type ContainerProps = {
  className?: string
}

const Component: React.VFC<Props> = ({ className = '', ...props }) => (
  <main className={cns('main-contents', className)}>
    <div className="item-container">
      {props.cards.map((e, i) => (
        <ItemCard key={i} card={e} />
      ))}
      <ItemFormCard />
      {Array.from('12345').map((_, i) => (
        <div key={i} className="blank-card" />
      ))}
    </div>
  </main>
)

export const StyledComponent = styled(Component)`
  &.main-contents {
    padding-top: 60px;

    > .item-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 20px;

      > .blank-card {
        width: 300px;
        min-width: 300px;
        margin: 10px;
      }
    }
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  useCardFetch()
  const cards = useCard()

  return <StyledComponent {...props} cards={cards} />
}

export const MainContents = Container
