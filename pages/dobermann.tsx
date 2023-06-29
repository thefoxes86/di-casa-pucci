import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllDobermann } from '../lib/api'
import ParallaxImage from '../components/parallax-image'
import ScrollParallaxComponent from '../components/scroll-parallax-component'
import Button from '../components/button'
import VirgoletteDestra from '../public/images/virgolette-destra.svg'
import VirgoletteSinistra from '../public/images/virgolette-sinistra.svg'
import Scrivici from '../components/scrivici'
import FilteringList from '../components/filtering-list'
import AnimateSection from '../components/animateSection'

export default function Allevamento({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`DOBERMANN`}</title>
      </Head>

      <Container>
        <AnimateSection className="section__content">
          <h1 dangerouslySetInnerHTML={{ __html: 'DOBERMANN' }}></h1>
        </AnimateSection>
        <AnimateSection className="section__content">
          <FilteringList type="dobermann" data={data.edges} />
        </AnimateSection>
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
        <AnimateSection className="section__content">
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
        </AnimateSection>

        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line bg-black">
            <div className="section__content__wrapper-cta">
              <Button link="/allevamento" type="secondary">
                TORNA ALL'ALLEVAMENTO
              </Button>
            </div>
          </div>
        </AnimateSection>

        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line-full py-6 bg-black">
            <Scrivici text="Siamo pronti a rispondere alle vostre domande e sempre disponibili a un incontro conoscitivo." />
          </div>
        </AnimateSection>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllDobermann(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
