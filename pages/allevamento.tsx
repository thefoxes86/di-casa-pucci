import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllevamento } from '../lib/api'
import Image from 'next/image'
import ParallaxImage from '../components/parallax-image'
import ScrollParallaxComponent from '../components/scroll-parallax-component'
import Button from '../components/button'
import VirgoletteDestra from '../public/images/virgolette-destra.svg'
import VirgoletteSinistra from '../public/images/virgolette-sinistra.svg'
import Slider from '../components/slider'
import Scrivici from '../components/scrivici'
import AnimateSection from '../components/animateSection'

export default function Allevamento({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <h2>
            L'ECCELLENZA DELLA RAZZA È
            <span className="font-bold w-full block">DI CASA PUCCI</span>
          </h2>
          <p>
            I Dobermann del nostro allevamento sono stati selezionati con amore
            e devozione, sono il frutto della nostra esperienza professionale
          </p>
        </div>
        <div className="section__content">
          <div className="category-content">
            {/* Dobermans */}
            <AnimateSection>
              <div className="content-image">
                <Image
                  loading="lazy"
                  src="https://www.dicasapucci.com/wp-content/uploads/2023/06/Rettangolo-28@2x.png"
                  alt="Dobermans"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <Button link="/dobermann" type="little">
                DOBERMAN
              </Button>
            </AnimateSection>
            {/* ZTP */}
            <AnimateSection>
              <div className="content-image">
                <Image
                  loading="lazy"
                  src="https://www.dicasapucci.com/wp-content/uploads/2023/06/Rettangolo-29@2x.png"
                  alt="ZTP"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <Button link="/ztp" type="little">
                ZTP
              </Button>
            </AnimateSection>
            {/* KÖRUNG */}
            <AnimateSection>
              <div className="content-image">
                <Image
                  loading="lazy"
                  src="https://www.dicasapucci.com/wp-content/uploads/2023/06/Rettangolo-30@2x.png"
                  alt="KÖRUNG"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <Button link="/korung" type="little">
                KÖRUNG
              </Button>
            </AnimateSection>
          </div>
          <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
        </div>
        <div className="section__content__wrapper__container">
          <AnimateSection className="section__content">
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
          </AnimateSection>
        </div>
        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <Slider data={data} />
          </div>
        </AnimateSection>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllevamento(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
