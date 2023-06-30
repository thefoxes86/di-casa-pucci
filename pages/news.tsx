import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { motion } from 'framer-motion'
import Link from 'next/link'
import moment from 'moment'

export default function News({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`NEWS`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: 'NEWS' }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
        </div>
        <div className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <div className="news_container">
              {data?.edges ? (
                data?.edges.map((item, index) => (
                  <motion.div
                    className="news_item"
                    key={index}
                    layout
                    initial={{ transform: 'translateY(0)', opacity: 0 }}
                    animate={{ transform: 'translateY(10px)', opacity: 1 }}
                    exit={{ transform: 'translateY(0)', opacity: 0 }}
                    transition={{
                      type: 'spring',
                      duration: 0.2,
                      delay: index * 0.05,
                    }}
                  >
                    <Link href={`/posts/${item.node?.slug}`}>
                      <div className="">
                        <img
                          src={
                            item.node?.featuredImage?.node?.sourceUrl ||
                            'https://www.dicasapucci.com/wp-content/themes/casapucci/img/placeholder-pedigree2.jpg'
                          }
                          alt="hero"
                        />
                        <span>{moment(item.node?.date).format('D-M-Y')}</span>
                        <h3>{item.node?.title}</h3>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="text-center">Non ci sono articoli</div>
              )}
            </div>
          </div>
        </div>
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
