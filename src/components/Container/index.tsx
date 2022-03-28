import { Container as StyledContainer } from './styles'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children, ...props }: ContainerProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
