import { render, screen } from '@testing-library/react'

import Navigation from '.'

describe('<Navigation />', () => {
  it('should render the navigation component', () => {
    render(<Navigation />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
