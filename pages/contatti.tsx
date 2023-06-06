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
  getContacts,
} from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Contacts({ data, preview }) {
  console.log('DATA', data)
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getContacts(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
