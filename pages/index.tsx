import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import BodyHome from '../components/body-home'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllDobermansForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ data, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Intro />
      <BodyHome data={data?.posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllDobermansForHome(preview)
  console.log('HOME', data)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
