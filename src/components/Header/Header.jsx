import { Container, Nav, Navbar } from 'react-bootstrap'

import { logo } from '@assets'

export const Header = () => {
  return (
    <header className='bg-secondary fw-semibold primary fs-4 fixed-top border-bottom border-2 border-tertiary'> 
      <Container>
        <Navbar className='justify-content-between'>
          <Navbar.Brand href='#'>
            <img
              src={logo}
              height="120"
              alt="Intellidriver Logo"
            />
          </Navbar.Brand>
          <Nav id='main-navbar' className='align-self-end gap-4'>
            <Nav.Link href='#section-1'>Início</Nav.Link>
            <Nav.Link href='#section-2'>Ranking</Nav.Link>
            <Nav.Link href='#section-3'>Objetivo</Nav.Link>
            <Nav.Link href='#section-4'>Sobre nós</Nav.Link>
            <Nav.Link href='#section-5'>Contato</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  )
}