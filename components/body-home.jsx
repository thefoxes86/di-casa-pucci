import { AnimatePresence, motion } from 'framer-motion'
import { SplitText } from '@cyriacbr/react-split-text'
import Button from './button'
import ParallaxImage from './parallax-image'
import ScrollParallaxComponent from './scroll-parallax-component'
import VirgoletteDestra from '../public/images/virgolette-destra.svg'
import VirgoletteSinistra from '../public/images/virgolette-sinistra.svg'
import Slider from './slider'

const BodyHome = () => {
  return (
    <AnimatePresence>
      <div className="body-home">
        <motion.section className="body-home__section">
          <ScrollParallaxComponent
            className="right-0"
            color="#000"
            src={VirgoletteDestra}
            offset={70}
          />
          <ScrollParallaxComponent
            className="left-0"
            color="#000"
            src={VirgoletteSinistra}
            offset={50}
          />
          <div className="section__content">
            <div className="section__content__wrapper-line">
              <div className="section__content__wrapper-text">
                <p>
                  Mi chiamo Dario Pucci e sono titolare{' '}
                  <span className="font-bold">Di Casa Pucci</span>, azienda
                  leader nel settore dell’allevamento di cani di{' '}
                  <span className="font-bold">razza Dobermann</span>.
                </p>
              </div>
              <div className="section__content__wrapper-cta">
                <Button link="/allevamento">I NOSTRI DOBERMANN</Button>
              </div>
            </div>
          </div>
          <div className="section__content__wrapper-line-full">
            <ParallaxImage
              src="https://www.dicasapucci.com/wp-content/uploads/2023/05/CUCCIOLI@2x.png"
              alt="hero"
              height={400}
            >
              <div className="text-parallax-image">
                <span className="font-light">FORTI E SANI,</span>
                <span className="font-bold">SI NASCE.</span>
              </div>
            </ParallaxImage>
          </div>
          <ScrollParallaxComponent
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
          />
          <div className="section__content">
            <div className="section__content__wrapper-line bg-black">
              <div className="section__content__wrapper-text">
                <p>
                  Ricerchiamo la massima espressione dell’eleganza, della
                  fierezza e della bellezza,{' '}
                  <span className="font-bold"> fin dalla nascita</span>.
                </p>
              </div>
              <div className="section__content__wrapper-cta">
                <Button link="/cuccioli" type="secondary">
                  CUCCIOLI
                </Button>
              </div>
            </div>
          </div>
          <div className="section__content">
            <div className="section__content__wrapper-line-full">
              <ParallaxImage
                src="https://www.dicasapucci.com/wp-content/uploads/2023/05/Accoppiamento@2x.png"
                alt="hero"
                height={400}
              >
                <div className="text-parallax-image">
                  <span className="font-light">LA PERFEZIONE,</span>
                  <span className="font-bold">S’INSEGUE.</span>
                </div>
              </ParallaxImage>
            </div>
          </div>
          <ScrollParallaxComponent
            className="right-0"
            color="#000"
            src={VirgoletteDestra}
            offset={100}
          />
          <ScrollParallaxComponent
            className="left-0"
            color="#000"
            src={VirgoletteSinistra}
            offset={80}
          />
          <div className="section__content">
            <div className="section__content__wrapper-line">
              <div className="section__content__wrapper-text">
                <p className="font-semibold">
                  <span className="font-bold">Inseguiamo la perfezione</span>{' '}
                  studiando attentamente ogni accoppiamento.
                </p>
              </div>
              <div className="section__content__wrapper-cta">
                <Button link="/accoppiamento" type="primary">
                  ACCOPPIAMENTO
                </Button>
              </div>
            </div>
          </div>

          <div className="section__content">
            <div className="section__content__wrapper-line-full">
              <ParallaxImage
                src="https://www.dicasapucci.com/wp-content/uploads/2023/05/Laddestramento@2x.png"
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
          <ScrollParallaxComponent
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
          />
          <div className="section__content">
            <div className="section__content__wrapper-line bg-black">
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
          <div className="section__content">
            <div className="section__content__wrapper-line-full py-6 ">
              <Slider />
            </div>
          </div>
          <div className="section__content bg-black ">
            <div className="section__content__wrapper-line py-6 text-center">
              <img
                src="https://www.dicasapucci.com/wp-content/uploads/2023/05/three-nation-logo.png"
                alt="quote"
              />
              <p className="font-thin py-3">
                Amiamo i nostri cani come il nostro pianeta, per questo
                investiamo ogni anno in nuove piantagioni.
              </p>
            </div>
            <div className="section__content__wrapper-cta">
              <Button link="#" type="secondary">
                I PROGETTI SOSTENIBILI
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </AnimatePresence>
  )
}

export default BodyHome
