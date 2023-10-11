import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import { getAccoppiamento } from '../lib/api'
import Slider from '../components/slider'
import Scrivici from '../components/scrivici'
import AnimateSection from '../components/animateSection'
import ParallaxImage from '../components/parallax-image'
import Button from '../components/button'

export default function Accoppiamento({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <h2>
            <span className="block w-100"> LA PERFEZIONE È</span>
            <span className="font-bold"> DI CASA PUCCI</span>
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          ></p>
        </div>
        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <Slider data={data} />
          </div>
        </AnimateSection>
        <div className="section__content__wrapper__container__inverse">
          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line-full">
              <Container>
                <ParallaxImage
                  src="http://backend.dicasapucci.com/wp-content/uploads/2023/06/Accoppiamento.png"
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
                    <span className="font-bold">Inseguiamo la perfezione</span>{' '}
                    studiando attentamente ogni accoppiamento.
                  </p>
                </div>
                <div className="section__content__wrapper-cta">
                  <Button link="/ztp" type="primary">
                    ZTP
                  </Button>
                </div>
              </Container>
            </div>
          </AnimateSection>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAccoppiamento(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
