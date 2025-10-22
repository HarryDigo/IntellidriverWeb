import { Row, Col } from 'react-bootstrap'
import { Leaderboard, Section } from '@components'

import { phone } from '@assets'
import { qr_template } from '@assets'

export const MainPage = () => {
  return (
    <main data-bs-spy='scroll' data-bs-target='#main-navbar' data-bs-smooth-scroll='true' className='main-page' tabIndex='0'>
      <Section id='section-1' bgcolor='primary'>
        <Row className='text-white'>
          <Col md={12} lg={6} className='d-flex flex-column justify-content-center align-items-center my-5 my-lg-0 gap-2'>
            <h3>Adquira nosso app</h3>
            <h1 className='poppins fw-bold'>Intellidriver</h1>
            <img src={qr_template} className='mt-4' alt="template de um qr code" />
          </Col>

          <Col md={12} lg={6} className='d-flex justify-content-center'>
            <img src={phone} alt="borda de um celular" />
          </Col>
        </Row>
      </Section>

      <Section id='section-2' bgcolor='secondary' className='d-flex flex-column text-center py-5'>
        <h1 className='poppins text-primary my-5'>Melhores Usuários</h1>
        <Leaderboard />
      </Section>
    </main>
  )
}