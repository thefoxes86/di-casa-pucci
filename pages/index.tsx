import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import BodyHome from '../components/body-home'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllDobermansForHome, getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allDobermans: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  console.log(edges, heroPost.slug)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Intro />
      <BodyHome />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allDobermans = await getAllDobermansForHome(preview)

  return {
    props: { allDobermans, preview },
    revalidate: 10,
  }
}
