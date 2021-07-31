import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Primary } from './CommonButton.stories'

it('renders the button in the primary state', () => {
  render(<Primary {...Primary.args} />)
  expect(screen.getByTestId('common-button')).toHaveTextContent('Button')
})
