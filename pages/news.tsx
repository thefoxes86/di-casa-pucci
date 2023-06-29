import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Slider from '../components/slider'
import Scrivici from '../components/scrivici'
import AnimateSection from '../components/animateSection'

export default function News({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`NEWS`}</title>
      </Head>

      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: 'NEWS' }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <Slider data={data} />
          </div>
        </AnimateSection>
        <AnimateSection className="section__content mt-10">
          <div className="section__content__wrapper-line-full py-6 bg-black">
            <Scrivici text="Siamo pronti a rispondere alle vostre domande e sempre disponibili a un incontro conoscitivo." />
          </div>
        </AnimateSection>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllPosts(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
