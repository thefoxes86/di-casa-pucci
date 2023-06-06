import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import { getAllDobermansWithSlug, getDobermanAndMorePosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import DogThree from '../../components/dog-three'
import DogDetails from '../../components/dog-details'

export default function Dobermann({ post, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post?.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post?.schedaDobermann?.dobNome}
                sesso={post.schedaDobermann?.dobSex?.name}
                allevatore={post?.schedaDobermann?.dobAllevatore}
                coverImage={post?.featuredImage}
              />
              <DogDetails data={post.schedaDobermann} />
              <DogThree
                primaryDog={{
                  name: post?.schedaDobermann?.dobNome,
                  image: post?.featuredImage,
                  sesso: post?.schedaDobermann?.dobSex?.name,
                  allevatore: post?.schedaDobermann?.dobAllevatore,
                }}
                schedaDobermann={post?.schedaDobermann}
              />
              <PostBody content={post?.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getDobermanAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data?.ctpDobermann,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const allPosts = await getAllDobermansWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/dobermann/${node?.slug}`) || [],
    fallback: true,
  }
}
