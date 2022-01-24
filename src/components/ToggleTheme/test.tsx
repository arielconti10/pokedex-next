import { render, screen } from '@testing-library/react'
import { ColorModeProvider, ThemeProvider } from '@xstyled/styled-components'

import theme from 'styles/theme'

import ToggleTheme from '.'

const ToggleThemeComponent = () => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <ToggleTheme />
    </ColorModeProvider>
  </ThemeProvider>
)

describe('<ToggleTheme />', () => {
  it('should render the ToggleTheme component', () => {
    render(<ToggleThemeComponent />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
