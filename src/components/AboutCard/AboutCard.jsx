export const AboutCard = ({ children, image }) => {
  return (
    <div className='d-flex flex-column align-items-center bg-tertiary text-start text-light shadow p-4 gap-4'>
      <img src={image} width={255} className='shadow' alt="foto de pessoa" />
      <div style={{ maxWidth: '255px' }}>
        {children}
      </div>
    </div>
  )
}