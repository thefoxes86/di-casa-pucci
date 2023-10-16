import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/container'

import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'

import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

import ParallaxImage from '../../components/parallax-image'
import Button from '../../components/button'
import VirgoletteDestra from '../../public/images/virgolette-destra.svg'
import VirgoletteSinistra from '../../public/images/virgolette-sinistra.svg'
import Scrivici from '../../components/scrivici'
import ScrollParallaxComponent from '../../components/scroll-parallax-component'
import AnimateSection from '../../components/animateSection'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

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
                <title>{`${post.title}`}</title>
                <meta
                  property="og:image"
                  content={post?.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <AnimateSection className="section__content">
                <div className="section__content__wrapper-line-full">
                  <ParallaxImage
                    src={post?.featuredImage?.node?.sourceUrl}
                    alt="hero"
                    height={400}
                  >
                    <div className="text-parallax-image">
                      <span
                        className="font-light"
                        dangerouslySetInnerHTML={{ __html: post?.title }}
                      ></span>
                    </div>
                  </ParallaxImage>
                </div>
              </AnimateSection>
              <AnimateSection className="section__content">
                <div className="section__content__wrapper-line-full px-6 my-6">
                  <p dangerouslySetInnerHTML={{ __html: post?.content }}></p>
                </div>
              </AnimateSection>
              <AnimateSection className="section__content">
                <div className="section__content__wrapper-cta">
                  <Button link="/news" type="secondary">
                    TORNA ALLE NEWS
                  </Button>
                </div>
                <div className="section__content"></div>
                <div className="section__content__wrapper-line-full">
                  <ParallaxImage
                    src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/Laddestramento@2x.png"
                    alt="hero"
                    height={400}
                  >
                    <div className="text-parallax-image">
                      <span className="font-light">VINCENTI,</span>
                      <span className="font-bold">SI DIVENTA.</span>
                    </div>
                  </ParallaxImage>
                </div>
              </AnimateSection>
              {/* <ScrollParallaxComponent
                className="right-0"
                color="#2B2B2B"
                src={VirgoletteDestra}
                offset={100}
              />
              <ScrollParallaxComponent
                className="left-0"
                color="#2B2B2B"
                src={VirgoletteSinistra}
                offset={80}
              /> */}
              <AnimateSection className="section__content">
                <div className="section__content__wrapper-line bg-black-content">
                  <div className="section__content__wrapper-text italic">
                    <p className="font-semibold">
                      Insieme al centro sportivo{' '}
                      <span className="font-bold w-100 flex text-center justify-center">
                        ABC100 Working Dog Club
                      </span>{' '}
                      prepariamo i vostri cani alla vittoria.
                    </p>
                  </div>
                  <div className="section__content__wrapper-cta">
                    <Button link="/cuccioli" type="secondary">
                      CUCCIOLI
                    </Button>
                  </div>
                </div>
              </AnimateSection>
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
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data?.post,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts?.edges?.map(({ node }) => `/posts/${node?.slug}`) || [],
    fallback: true,
  }
}
