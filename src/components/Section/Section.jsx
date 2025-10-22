import { Container } from 'react-bootstrap'

export const Section = ({ bgcolor, children, className, id }) => {
  return (
    <div id={id} className={`bg-${bgcolor}`}>
      <Container className={className}>
        {children}
      </Container>
    </div>
  )
}