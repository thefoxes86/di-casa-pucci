import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAbout } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Scrivici from '../components/scrivici'

export default function About({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p
          className="px-12"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></p>

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
  const data = await getAbout(preview)

  return {
    props: { data, preview },
    revalidate: 10,
  }
}
