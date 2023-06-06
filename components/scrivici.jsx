import Button from './button'

const Scrivici = props => {
  return (
    <div className="section_block__scrivici px-6">
      <p>{props.text}</p>

      <div className="section__content__wrapper-cta">
        <Button link="/contatti">SCRIVICI</Button>
      </div>
    </div>
  )
}

export default Scrivici
