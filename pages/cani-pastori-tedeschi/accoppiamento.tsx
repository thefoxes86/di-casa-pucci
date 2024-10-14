import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/container";
import Layout from "@/components/layout";
import { getAccoppiamento } from "@/lib/api";
import Slider from "@/components/slider";
import AnimateSection from "@/components/animateSection";
import ParallaxImage from "@/components/parallax-image";
import Button from "@/components/button";

export default function Accoppiamento({ data, preview }) {
  return (
    <Layout preview={false} section="pastori">
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <h2>
            <span className="block w-100"> LA PERFEZIONE È</span>
            <span className="font-bold"> DI CASA PUCCI</span>
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          ></p>
        </div>
        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line-full py-6 ">
            <Slider data={data} section={"pastori"} />
          </div>
        </AnimateSection>
        <div className="section__content__wrapper__container">
          <AnimateSection className="section__content section__content__wrapper-line-full">
            <Container>
              <ParallaxImage
                src="https://backend.dicasapucci.com/wp-content/uploads/2024/05/5F9F3A5A-7473-4477-9E54-51EFC62B5069-scaled.jpeg"
                alt="hero"
                height={400}
              >
                <div className="text-parallax-image">
                  <span className="font-light">ELEGANTI E MAESTOSI,</span>
                  <span className="font-bold">I NOSTRI PASTORI TEDESCHI.</span>
                </div>
              </ParallaxImage>
            </Container>
          </AnimateSection>

          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line bg-black-content">
              <Container>
                <div className="section__content__wrapper-text italic">
                  <p>
                    Di Casa Pucci è leader negli allevamenti di{" "}
                    <span className="font-bold"> pastori tedeschi</span>.
                  </p>
                </div>
                <div className="section__content__wrapper-cta">
                  <Button
                    link="/cani-pastori-tedeschi/pastori"
                    type="secondary"
                  >
                    I PASTORI TEDESCHI
                  </Button>
                </div>
              </Container>
            </div>
          </AnimateSection>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAccoppiamento(preview);

  return {
    props: { data, preview },
    revalidate: 10,
  };
};
