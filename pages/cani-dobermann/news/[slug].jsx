import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import Layout from "@/components/layout";
import PostTitle from "@/components/post-title";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";

export default function Dobermann({ post, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} section={"dobermann"}>
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
              <h1>{post?.title}</h1>
              <div className="w-100 flex justify-center">
                <Image
                  loading="lazy"
                  src={post?.featuredImage?.node?.sourceUrl}
                  width={1000}
                  height={200}
                  className=" md:w-1/2 w-full object-cover object-center"
                />
              </div>
              <PostBody content={post?.content} />
              <div className="flex flex-wrap gap-2 mx-14 justify-center">
                {post?.schedaArticolo?.articoloGalleria?.map((img) => (
                  <Image
                    loading="lazy"
                    src={img?.sourceUrl}
                    width={1000}
                    height={200}
                    className="w-auto h-60 object-cover object-center"
                  />
                ))}
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  console.log("POST", params?.slug);
  const data = await getPostBySlug(params?.slug);
  console.log("POST", data);
  return {
    props: {
      preview,
      post: data?.post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();

  return {
    paths:
      allPosts.edges.map(({ node }) => `/cani-dobermann/news/${node?.slug}`) ||
      [],
    fallback: true,
  };
};
