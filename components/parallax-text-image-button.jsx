import Button from './button'

const ParallaxTextImageButton = ({ textButton, typeButton, text, image }) => {
  return (
    <>
      <div className="section__content">
        <div className="section__content__wrapper-line-full">
          <ParallaxImage
            src="http://backend.dicasapucci.com/wp-content/uploads/2023/05/Laddestramento@2x.png"
            alt="hero"
            height={400}
          >
            <div className="text-parallax-image">
              <span className="font-light">VINCENTI,</span>
              <span className="font-bold">SI DIVENTA.</span>
            </div>
          </ParallaxImage>
        </div>
      </div>
      {/* <ScrollParallaxComponent
        className="right-0"
        color="#2B2B2B"
        src={VirgoletteDestra}
        offset={100}
      />
      <ScrollParallaxComponent
        className="left-0"
        color="#2B2B2B"
        src={VirgoletteSinistra}
        offset={80}
      /> */}
      <div className="section__content">
        <div className="section__content__wrapper-line bg-black-content">
          <div className="section__content__wrapper-text">
            <p className="font-semibold">
              Insieme al centro sportivo{' '}
              <span className="font-bold w-100 flex text-center justify-center">
                ABC100 Working Dog Club
              </span>{' '}
              prepariamo i vostri cani alla vittoria.
            </p>
          </div>
          <div className="section__content__wrapper-cta">
            <Button link="/cuccioli" type="secondary">
              CUCCIOLI
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParallaxTextImageButton
