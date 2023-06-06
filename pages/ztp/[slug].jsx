import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import {
  getAllDobermansWithSlug,
  getAllPostsWithSlug,
  getDobermanAndMorePosts,
  getPostAndMorePosts,
} from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import DogThree from '../../components/dog-three'
import DogDetails from '../../components/dog-details'

export default function Ztp({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
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
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author || null}
                categories={post.categories || null}
              />
              <DogDetails data={post.schedaDobermann} />
              <DogThree schedaDobermann={post.schedaDobermann} />
              <PostBody content={post.content} />
              <footer>
                {post?.tags?.edges?.length > 0 && (
                  <Tags tags={post.tags || null} />
                )}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
      post: data.ctpDobermann,
      posts: data.ctpDobermanns,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const allPosts = await getAllDobermansWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/dobermans/${node.slug}`) || [],
    fallback: true,
  }
}
