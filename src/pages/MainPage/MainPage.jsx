import { Row, Col } from 'react-bootstrap'
import { AboutCard, Leaderboard, ObjectiveAccordion, Section } from '@components'

import { contato_bg, guerra, phone, qr_template, rag, target } from '@assets'

export const MainPage = () => {
  return (
    <main data-bs-spy='scroll' data-bs-target='#main-navbar' data-bs-smooth-scroll='true' className='main-page overflow-x-hidden' tabIndex='0'>
      <Section id='section-1' bgColor='primary'>
        <Row className=' text-light'>
          <Col md={12} lg={6} className='d-flex flex-column justify-content-center align-items-center my-5 my-lg-0 gap-2'>
            <h3>Adquira nosso app</h3>
            <h1 className='poppins fw-bold'>Intellidriver</h1>
            <img src={qr_template} className='mt-4' alt="template de um qr code" />
          </Col>

          <Col md={12} lg={6} className='d-flex justify-content-center'>
            <img src={phone} className='d-none d-lg-block' alt="borda de um celular" />
          </Col>
        </Row>
      </Section>

      <Section id='section-2' bgColor='secondary' className='d-flex flex-column text-center py-5'>
        <h1 className='poppins text-primary my-5'>Melhores Usuários</h1>
        <Leaderboard />
      </Section>

      <Section id='section-3' bgColor='primary' className='py-5'>
        <Row className='my-5'>
          <Col lg={12} xl={8}>
            <h1 className='poppins title text-accent fw-bolder'>
              Nossos <br />
              Objetivos
            </h1>
            <div className='py-5 pe-0 pe-xl-5 me-0 me-xl-5'>
              <ObjectiveAccordion />
            </div>
          </Col>
          <Col lg={0} xl={4} className='d-flex justify-content-center align-items-start'>
            <img src={target} className='target-image d-none d-xl-block' alt="ilustração de alvo" />
          </Col>
        </Row>
      </Section>

      <Section id='section-4' bgColor='secondary' className='d-flex flex-column text-center py-5' >
        <h1 className='poppins text-primary my-5'>Nossa Equipe</h1>
        <Row className='justify-content-center my-5'>
          <Col md={6} lg={4} className='d-flex justify-content-center'>
            <AboutCard image={guerra}>
              <h3 className='text-center fw-semibold'>Leonardo Guerra de Godoy</h3>
                <p className='fs-5'>
                  Responsável pelo backend do IntelliDriver e pelas leituras de dados via porta OBD, 
                  garantindo a integração entre o carro e o app. Estudante da Etec Bento Quirino, 
                  no curso técnico de Desenvolvimento de Sistemas.
                </p>
            </AboutCard>
          </Col>
          <Col md={6} lg={4} className='d-flex justify-content-center mt-5 mt-md-0'>
            <AboutCard image={rag}>
              <h3 className='text-center fw-semibold'>Rafaela Valentina Costa Kage</h3>
                <p className='fs-5'>
                  Atuou no desenvolvimento do frontend em React Native. 
                  Também foi responsável pela criação do design visual e pela documentação do projeto. 
                  Estudante da Etec Bento Quirino, no curso técnico de Desenvolvimento de Sistemas.
                </p>
            </AboutCard>
          </Col>
          <Col md={6} lg={4} className='d-flex justify-content-center mt-5 mt-lg-0'>
            <AboutCard image={guerra}>
              <h3 className='text-center fw-semibold'>Luna Scatolin Flora do Rio</h3>
                <p className='fs-5'>
                  Simulou o IntelliDriver com técnicas de Sistemas Embarcados.
                  Também desenvolveu o site web utilizando React e a API usando ExpressJS e MongoDB. Estudante da Etec Bento Quirino, 
                  no curso técnico de Desenvolvimento de Sistemas.
                </p>
            </AboutCard>
          </Col>
        </Row>
      </Section>
      <Section id='section-5' bgColor='extra-1' fill={contato_bg} className='text-extra-2 fw-semibold'>
        <div style={{ height: '906px' }} className='d-flex flex-column justify-content-end'>
          <h1 className='mt-auto'>
            Entre em <br />
            contato conosco
          </h1>
          <ul className='fs-5 mb-auto'>
            <li>intellidriver@gmail.com</li>
            <li>@intellidriverml</li>
          </ul>
          <span className='mb-5'>Copyright © 2025</span>
        </div>
      </Section>
    </main>
  )
}