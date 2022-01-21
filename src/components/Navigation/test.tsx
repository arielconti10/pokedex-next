import { render, screen } from '@testing-library/react'
import { ColorModeProvider, ThemeProvider } from '@xstyled/styled-components'
import theme from 'styles/theme'
import Navigation from '.'

const NavigationMock = () => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <Navigation />
    </ColorModeProvider>
  </ThemeProvider>
)

describe('<Navigation />', () => {
  it('should render the navigation component', () => {
    render(<NavigationMock />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
