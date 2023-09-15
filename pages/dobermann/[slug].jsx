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
import ScrollParallaxComponent from '../../components/scroll-parallax-component'
import VirgoletteDestra from '../../public/images/virgolette-destra.svg'
import VirgoletteSinistra from '../../public/images/virgolette-sinistra.svg'
import ParallaxImage from '../../components/parallax-image'
import Button from '../../components/button'
import Scrivici from '../../components/scrivici'
import AnimateSection from '../../components/animateSection'

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
                <title>{`${post.title} | ${CMS_NAME}`}</title>
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
              <DogDetails data={post?.schedaDobermann} />
              <DogThree
                primaryDog={{
                  name: post?.schedaDobermann?.dobNome,
                  image: post?.featuredImage,
                  sesso: post?.schedaDobermann?.dobSex?.name,
                  allevatore: post?.schedaDobermann?.dobAllevatore,
                }}
                schedaDobermann={post?.schedaDobermann}
              />

              <AnimateSection className="section__content__wrapper-cta bg-black-content !py-20 !mt-16">
                <Button link="/allevamento" type="secondary">
                  TORNA ALL'ALLEVAMENTO
                </Button>
              </AnimateSection>
              <div className="section__content__wrapper__container__inverse">
                <AnimateSection className="section__content section__content__wrapper-line-full">
                  <ParallaxImage
                    src="https://www.dicasapucci.com/wp-content/uploads/2023/05/Laddestramento@2x.png"
                    alt="hero"
                    height={400}
                  >
                    <div className="text-parallax-image">
                      <span className="font-light">VINCENTI,</span>
                      <span className="font-bold">SI DIVENTA.</span>
                    </div>
                  </ParallaxImage>
                </AnimateSection>

                {/* <ScrollParallaxComponent
                className="right-0"
                color="#000"
                src={VirgoletteDestra}
                offset={100}
              />
              <ScrollParallaxComponent
                className="left-0"
                color="#000"
                src={VirgoletteSinistra}
                offset={80}
              /> */}
                <AnimateSection className="section__content mt-20">
                  <p className="text-center mb-0 !font-bold !mb-0 italic">
                    Inseguiamo la perfezione
                  </p>
                  <p className="text-center mt-0">
                    studiando attentamente ogni accoppiamento
                  </p>
                  <div className="section__content__wrapper-cta">
                    <Button link="/accoppiamento" type="secondary">
                      L'ACCOPPIAMENGTO
                    </Button>
                  </div>
                </AnimateSection>
              </div>

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
  console.log('SERIALIZAING', data)
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
