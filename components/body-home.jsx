import { AnimatePresence, motion } from "framer-motion";

import Button from "./button";
import ParallaxImage from "./parallax-image";
import ScrollParallaxComponent from "./scroll-parallax-component";
import VirgoletteDestra from "../public/images/virgolette-destra.svg";
import VirgoletteSinistra from "../public/images/virgolette-sinistra.svg";
import Slider from "./slider";
import AnimateSection from "./animateSection";
import Container from "./container";

const BodyHome = ({ data }) => {
  return (
    <AnimatePresence>
      <div className="body-home">
        <motion.section className="body-home__section">
          {/* <ScrollParallaxComponent
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
          /> */}
          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line-full py-6">
              <Slider data={data} />
            </div>
          </AnimateSection>
          <div className="section__content__wrapper__container__inverse !mt-0">
            <AnimateSection className="section__content__wrapper-line-full md:bg-black mt-0">
              <Container>
                <div className="section__content__wrapper-line">
                  <div className="section__content__wrapper-text italic">
                    <p>
                      Mi chiamo Dario Pucci e sono titolare{" "}
                      <span className="font-bold">Di Casa Pucci</span>, azienda
                      leader nel settore dell’allevamento di cani di{" "}
                      <span className="font-bold">razza Dobermann</span>.
                    </p>
                  </div>
                  <div className="section__content__wrapper-cta">
                    <Button link="/allevamento">I NOSTRI DOBERMANN</Button>
                  </div>
                </div>
              </Container>
            </AnimateSection>
            <AnimateSection className="section__content__wrapper-line-full md:bg-black">
              <Container>
                <div className="section__content__wrapper-line">
                  <div className="section__content__wrapper-text italic">
                    <p>
                      Mi chiamo Dario Pucci e sono titolare{" "}
                      <span className="font-bold">Di Casa Pucci</span>, azienda
                      leader nel settore dell’allevamento di cani di{" "}
                      <span className="font-bold">razza Pastore</span>.
                    </p>
                  </div>
                  <div className="section__content__wrapper-cta">
                    <Button link="/pastori">I NOSTRI PASTORI</Button>
                  </div>
                </div>
              </Container>
            </AnimateSection>
          </div>
          <div className="section__content__wrapper__container__inverse">
            <AnimateSection className="section__content section__content__wrapper-line-full">
              <Container>
                <ParallaxImage
                  src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/CUCCIOLI@2x.png"
                  alt="hero"
                  height={400}
                >
                  <div className="text-parallax-image">
                    <span className="font-light">FORTI E SANI,</span>
                    <span className="font-bold">SI NASCE.</span>
                  </div>
                </ParallaxImage>
              </Container>
            </AnimateSection>

            <AnimateSection className="section__content">
              <div className="section__content__wrapper-line bg-black-content">
                <Container>
                  <div className="section__content__wrapper-text italic">
                    <p>
                      Ricerchiamo la massima espressione dell’eleganza, della
                      fierezza e della bellezza,{" "}
                      <span className="font-bold"> fin dalla nascita</span>.
                    </p>
                  </div>
                  <div className="section__content__wrapper-cta">
                    <Button link="/cuccioli" type="secondary">
                      I NOSTRI CUCCIOLI
                    </Button>
                  </div>
                </Container>
              </div>
            </AnimateSection>
          </div>
          <div className="section__content__wrapper__container">
            <AnimateSection className="section__content">
              <div className="section__content__wrapper-line-full">
                <Container>
                  <ParallaxImage
                    src="https://backend.dicasapucci.com/wp-content/uploads/2023/06/Accoppiamento.png"
                    alt="hero"
                    height={400}
                  >
                    <div className="text-parallax-image">
                      <span className="font-light">LA PERFEZIONE,</span>
                      <span className="font-bold">S’INSEGUE.</span>
                    </div>
                  </ParallaxImage>
                </Container>
              </div>
            </AnimateSection>

            <AnimateSection className="section__content">
              <div className="section__content__wrapper-line">
                <Container>
                  <div className="section__content__wrapper-text italic">
                    <p className="font-semibold">
                      <span className="font-bold">
                        Inseguiamo la perfezione
                      </span>{" "}
                      studiando attentamente ogni accoppiamento.
                    </p>
                  </div>
                  <div className="section__content__wrapper-cta">
                    <Button link="/accoppiamento" type="primary">
                      L'ACCOPPIAMENTO
                    </Button>
                  </div>
                </Container>
              </div>
            </AnimateSection>
          </div>
          <div className="section__content__wrapper__container__inverse">
            <AnimateSection className="section__content">
              <div className="section__content__wrapper-line-full">
                <Container>
                  <ParallaxImage
                    src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/Laddestramento@2x.png"
                    alt="hero"
                    height={400}
                  >
                    <div className="text-parallax-image">
                      <span className="font-light">VINCENTI,</span>
                      <span className="font-bold">SI DIVENTA.</span>
                    </div>
                  </ParallaxImage>
                </Container>
              </div>
            </AnimateSection>

            <AnimateSection className="section__content">
              <div className="section__content__wrapper-line bg-black-content">
                <Container>
                  <div className="section__content__wrapper-text italic">
                    <p className="font-semibold">
                      Insieme al centro sportivo{" "}
                      <span className="font-bold w-100 flex text-center justify-center">
                        ABC100 Working Dog Club
                      </span>{" "}
                      prepariamo i vostri cani alla vittoria.
                    </p>
                  </div>
                  <div className="section__content__wrapper-cta">
                    <Button link="/addestramento" type="secondary">
                      L'ADDESTRAMENTO
                    </Button>
                  </div>
                </Container>
              </div>
            </AnimateSection>
          </div>

          <AnimateSection className="section__content bg-black-content-content">
            <div className="section__content__wrapper-line py-6 text-center">
              <img
                src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/three-nation-logo.png"
                alt="quote"
              />
              <p className="font-thin py-3 !mb-0 italic">
                Amiamo i nostri cani come il nostro pianeta, per questo
                investiamo ogni anno in nuove piantagioni.
              </p>
            </div>
            <div className="section__content__wrapper-cta">
              <Button
                link="https://tree-nation.com/it/profilo/di-casa-pucci"
                type="secondary"
              >
                I PROGETTI SOSTENIBILI
              </Button>
            </div>
          </AnimateSection>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default BodyHome;
