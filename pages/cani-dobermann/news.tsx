import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/container";
import Layout from "@/components/layout";
import { getAllPosts } from "@/lib/api";
import { motion } from "framer-motion";
import Link from "next/link";
import moment from "moment";

export default function News({ data, preview }) {
  return (
    <Layout preview={false} section={"dobermann"}>
      <Head>
        <title>{`NEWS`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: "NEWS" }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
        </div>
        <div className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <div className="news_container">
              {data?.edges ? (
                data?.edges.map((item, index) => (
                  <>
                    {item?.node?.sezione?.sezione === "dobermann" ? (
                      <motion.div
                        className="news_item"
                        key={index}
                        layout
                        initial={{
                          transform: "translateY(10px)",
                          opacity: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        exit={{ transform: "translateY(0)", opacity: 0 }}
                        transition={{
                          type: "spring",
                          duration: 0.5,
                          delay: index * 0.05,
                        }}
                      >
                        <Link href={`/cani-dobermann/news/${item?.node?.slug}`}>
                          <div className="">
                            <img
                              src={
                                item.node?.featuredImage?.node?.sourceUrl ||
                                "https://backend.dicasapucci.com/wp-content/uploads/2023/07/placeholder_dobermann_dicasapucci.png"
                              }
                              alt="hero"
                            />
                            <span>
                              {moment(item.node?.date).format("D-M-Y")}
                            </span>
                            <h3>{item.node?.title}</h3>
                          </div>
                        </Link>
                      </motion.div>
                    ) : null}
                  </>
                ))
              ) : (
                <div className="text-center">Non ci sono articoli</div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllPosts(preview);

  return {
    props: { data, preview },
    revalidate: 10,
  };
};
