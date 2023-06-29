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
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <Slider data={data} />
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
  const data = await getAccoppiamento(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
