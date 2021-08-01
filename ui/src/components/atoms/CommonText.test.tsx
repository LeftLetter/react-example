import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Small } from './CommonText.stories'

it('renders the text in the small state', () => {
  render(<Small {...Small.args} />)
  expect(screen.getByTestId('common-text')).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )
})
