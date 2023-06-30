import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import { getAccoppiamento } from '../lib/api'
import Slider from '../components/slider'
import Scrivici from '../components/scrivici'
import AnimateSection from '../components/animateSection'

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
              __html: 'in attesa del testo dal cliente',
            }}
          ></p>
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
  const data = await getAccoppiamento(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
