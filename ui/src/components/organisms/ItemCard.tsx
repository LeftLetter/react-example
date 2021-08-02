import React from 'react'
import styled from 'styled-components'
import { cns } from '../../utils/common'
import { Card } from '../../utils/types/Cards'
import { CommonButton } from '../atoms/CommonButton'
import { CommonText } from '../atoms/CommonText'

type Props = {
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void
} & ContainerProps

type ContainerProps = {
  className?: string
  card: Card
}

const Component: React.VFC<Props> = ({ className = '', ...props }) => (
  <div className={cns('item-card', className)}>
    <CommonText size="large">{props.card.title}</CommonText>
    <br />
    <CommonText size="medium">{props.card.description}</CommonText>
    <CommonButton className="delete" colorTheme="error">
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

const Container: React.FC<ContainerProps> = (props) => {
  const handleClick = () => {
    // ItemCard削除処理を書く
  }

  return <StyledComponent {...props} handleClick={handleClick} />
}

export const ItemCard = Container
