import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the header component', () => {
    render(<Header />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
