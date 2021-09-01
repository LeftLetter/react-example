import React from 'react'
import styled from 'styled-components'
import { useCard } from '../../hooks/useCard'
import { useCardFetch } from '../../hooks/useCardFetch'
import { Cards } from '../../types/Cards'
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
      <ItemFormCard></ItemFormCard>
    </div>
  </main>
)

export const StyledComponent = styled(Component)`
  &.main-contents {
    padding-top: 60px;

    > .item-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
    }
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  useCardFetch()
  const cards = useCard()

  return <StyledComponent {...props} cards={cards} />
}

export const MainContents = Container
