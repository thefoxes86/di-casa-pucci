import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Gallery from '../components/gallery'
import Layout from '../components/layout'
import { getAddestramento } from '../lib/api'
import { motion } from 'framer-motion'
import ParallaxImage from '../components/parallax-image'
import ScrollParallaxComponent from '../components/scroll-parallax-component'
import VirgoletteDestra from '../public/images/virgolette-destra.svg'
import VirgoletteSinistra from '../public/images/virgolette-sinistra.svg'
import Button from '../components/button'
import Scrivici from '../components/scrivici'
import AnimateSection from '../components/animateSection'

export default function Addestramento({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <h2>
            <span className="block w-100"> LA VITTORIA È</span>
            <span className="font-bold"> DI CASA PUCCI</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
        </div>
        <div className="text-center">
          <Button link="/contatti" type="secondary">
            SCRIVICI
          </Button>
        </div>
        {/* <div className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <Gallery />
          </div>
        </div> */}
        <div className="section__content__wrapper__container__inverse">
          <AnimateSection className="section__content section__content__wrapper-line-full mt-16">
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
          </AnimateSection>
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
          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line bg-black-content">
              <div className="section__content__wrapper-text italic">
                <p>
                  Ricerchiamo la massima espressione dell’eleganza, della
                  fierezza e della bellezza,{' '}
                  <span className="font-bold"> fin dalla nascita</span>.
                </p>
              </div>
              <div className="section__content__wrapper-cta">
                <Button link="/cuccioli" type="secondary">
                  I NOSTRI CUCCIOLI
                </Button>
              </div>
            </div>
          </AnimateSection>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAddestramento(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
