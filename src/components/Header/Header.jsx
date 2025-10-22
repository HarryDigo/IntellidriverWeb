import { Container, Col, Nav, Navbar, Row } from 'react-bootstrap'

import { logo } from '@assets'

export const Header = () => {
  return (
    <header className='bg-secondary fw-semibold primary fs-4 fixed-top border-bottom border-2 border-tertiary'> 
      <Container fluid='lg'>
        <Navbar className='justify-content-between'>
          <Navbar.Brand href='#'>
            <img
              src={logo}
              height="120"
              alt="Intellidriver Logo"
            />
          </Navbar.Brand>
          <Nav id='main-navbar' className='align-self-end gap-4'>
            <Row className='justify-content-center'>
              <Col sm={4} md='auto'><Nav.Link href='#section-1'>Início</Nav.Link></Col>
              <Col sm={4} md='auto'><Nav.Link href='#section-2'>Ranking</Nav.Link></Col>
              <Col sm={4} md='auto'><Nav.Link href='#section-3'>Objetivo</Nav.Link></Col>
              <Col sm={4} md='auto'><Nav.Link href='#section-4'>Sobre nós</Nav.Link></Col>
              <Col sm={4} md='auto'><Nav.Link href='#section-5'>Contato</Nav.Link></Col>
            </Row>
          </Nav>
        </Navbar>
      </Container>
    </header>
  )
}