import React from 'react'
import styled from 'styled-components'
import { Card } from '../../contexts/cardContext'
import { useCardDelete } from '../../hooks/useCardDelete'
import { cns } from '../../utils/common'
import { CommonButton } from '../atoms/CommonButton'
import { CommonText } from '../atoms/CommonText'

type Props = {
  handleClick: (id: string) => void
} & ContainerProps

type ContainerProps = {
  className?: string
  card: Card
}

const Component: React.VFC<Props> = ({
  className = '',
  handleClick,
  ...props
}) => (
  <div className={cns('item-card', className)}>
    <CommonText size="large">{props.card.title}</CommonText>
    <br />
    <CommonText size="medium">{props.card.description}</CommonText>
    <CommonButton
      className="delete"
      colorTheme="error"
      onClick={() => handleClick(props.card.id)}
    >
      ×
    </CommonButton>
  </div>
)

export const StyledComponent = styled(Component)`
  &.item-card {
    position: relative;
    min-width: 300px;
    width: 300px;
    min-height: 300px;
    height: 300px;
    border: 2px solid var(--color-main);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }

  /* classNameを注入することでCommonButtonを拡張 */
  > .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  const removeCard = useCardDelete()

  return <StyledComponent {...props} handleClick={removeCard} />
}

export const ItemCard = Container
