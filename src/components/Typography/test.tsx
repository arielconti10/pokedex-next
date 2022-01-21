import { render, screen } from '@testing-library/react'
import { ColorModeProvider, ThemeProvider } from '@xstyled/styled-components'
import theme from 'styles/theme'
import Typography from '.'

type TypographyMockProps = {
  text: string
}

const TypographyMock = ({ text }: TypographyMockProps) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <Typography>{text}</Typography>
    </ColorModeProvider>
  </ThemeProvider>
)

describe('<Typography />', () => {
  it('should render the Typography component', () => {
    render(<TypographyMock text="Example" />)

    expect(screen.getByText('Example')).toBeInTheDocument()
  })
})
