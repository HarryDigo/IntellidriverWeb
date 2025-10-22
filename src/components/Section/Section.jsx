import { Container } from 'react-bootstrap'

export const Section = ({ bgColor, children, className, fill, id }) => {
  return (
    <section id={id} className={`bg-${bgColor}`}>
      {fill && (
        <img src={fill} className='fill d-none d-xl-block'></img>
      )}
      <Container className={className}>
        {children}
      </Container>
    </section>
  )
}