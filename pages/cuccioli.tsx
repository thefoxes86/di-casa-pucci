import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllCuccioli } from '../lib/api'
import ParallaxImage from '../components/parallax-image'
import ScrollParallaxComponent from '../components/scroll-parallax-component'
import Button from '../components/button'
import VirgoletteDestra from '../public/images/virgolette-destra.svg'
import VirgoletteSinistra from '../public/images/virgolette-sinistra.svg'
import Scrivici from '../components/scrivici'
import FilteringList from '../components/filtering-list'
import AnimateSection from '../components/animateSection'
export default function Cuccioli({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`CUCCIOLI`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: 'CUCCIOLI' }}></h1>
          <h2>
            {' '}
            LA FORZA E IL BENESSERE
            <span className="block w-100">
              SONO <span className="font-bold"> DI CASA PUCCI</span>
            </span>
          </h2>
          <p className="italic">
            Fin dalla nascita selezioniamo i Dobermann migliori secondo
            Benessere, Forza e Bellezza.
          </p>
        </div>

        <AnimateSection className="section__content">
          <FilteringList type="dobermann" data={data.edges} />
        </AnimateSection>
        <div className="section__content__wrapper__container">
          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line bg-black-content">
              <div className="section__content__wrapper-text italic">
                <p>
                  Il Dobermann è la massima espressione dell’eleganza, della
                  fierezza e della equilibrio. Sempre pronto, disponibile,
                  gioioso e tenero. Sempre sicuro di sé, esuberante e pieno di
                  energia. Sempre sincero, coccolone e amico. Un vero compagno
                  di vita.
                </p>
              </div>
            </div>
          </AnimateSection>

          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line-full">
              <ParallaxImage
                src="https://www.dicasapucci.com/wp-content/uploads/2023/06/Accoppiamento.png"
                alt="hero"
                height={400}
              >
                <div className="text-parallax-image">
                  <span className="font-light">LA PERFEZIONE,</span>
                  <span className="font-bold">S’INSEGUE.</span>
                </div>
              </ParallaxImage>
            </div>
          </AnimateSection>
        </div>
        {/* <ScrollParallaxComponent
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
        /> */}

        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line">
            <div className="section__content__wrapper-text italic">
              <p>
                <span className="font-bold"> Inseguiamo la perfezione</span>{' '}
                studiando attentamente ogni accoppiamento.
              </p>
            </div>
            <div className="section__content__wrapper-cta">
              <Button link="/accoppiamento" type="secondary">
                L'ACCOPPIAMENTO
              </Button>
            </div>
          </div>
        </AnimateSection>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllCuccioli(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
