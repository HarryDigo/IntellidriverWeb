import { Accordion } from 'react-bootstrap'

export const ObjectiveAccordion = () => {
  return (
    <Accordion data-bs-theme='dark' className='me-0 me-xl-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Menos gasto de combustível</Accordion.Header>
        <Accordion.Body>
          Analisar detalhadamente os dados coletados para identificar desperdícios energéticos e sugerir mudanças práticas, 
          equilibrando desempenho e economia, e promovendo mobilidade sustentável.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Conscientização sobre Hábitos de Direção</Accordion.Header>
        <Accordion.Body>
          Informar o motorista sobre o impacto de seu comportamento na eficiência do veículo, 
          incentivando práticas que tragam benefícios econômicos, ambientais e de segurança.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Contribuição para um Trânsito Mais Seguro</Accordion.Header>
        <Accordion.Body>
          Ao aumentar a conscientização do motorista, reduzir falhas mecânicas e comportamentos de risco, 
          promovendo um trânsito mais confiável e seguro para todos.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Redução da Emissão de Gases Poluentes</Accordion.Header>
        <Accordion.Body>
          Estimular práticas de direção eficientes, diminuindo o consumo de combustível e as emissões de gases poluentes, 
          contribuindo para a sustentabilidade e alinhando-se aos ODS 11.6 e 13.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Prolongamento da Vida Útil do Veículo</Accordion.Header>
        <Accordion.Body>
          Identificar falhas e recomendar manutenções preventivas por meio da análise contínua dos dados da porta OBD-II, 
          garantindo menor desgaste dos componentes automotivos e maior durabilidade do veículo.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Economia Financeira</Accordion.Header>
        <Accordion.Body>
          Promover a redução de custos com combustível e manutenção do veículo, 
          através da coleta e análise de dados em tempo real, 
          identificando padrões de condução que geram desperdícios e fornecendo orientações para práticas mais econômicas.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}