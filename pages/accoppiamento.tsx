import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {
  getAllDobermansForHome,
  getAllPostsForHome,
  getAbout,
  getAddestramento,
  getAccoppiamento,
} from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Slider from '../components/slider'
import Scrivici from '../components/scrivici'

export default function Accoppiamento({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container data={data}>
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
        <div className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <Slider />
          </div>
        </div>
        <div className="section__content">
          <div className="section__content__wrapper-line-full py-6 bg-black">
            <Scrivici text="Siamo pronti a rispondere alle vostre domande e sempre disponibili a un incontro conoscitivo." />
          </div>
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
