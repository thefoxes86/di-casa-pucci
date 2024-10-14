import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/container";
import Layout from "@/components/layout";
import { getAllPastori } from "@/lib/api";
import ParallaxImage from "@/components/parallax-image";

import FilteringListPastori from "@/components/filtering-list-pastori";
import AnimateSection from "@/components/animateSection";
import Button from "@/components/button";
import Slider from "@/components/slider";
export default function Ztp({ data, preview }) {
  return (
    <Layout preview={false} section={"pastori"}>
      <Head>
        <title>{`ZTP`}</title>
      </Head>

      <AnimateSection className="section__content bg-black">
        <div className="px-6">
          <h1
            dangerouslySetInnerHTML={{
              __html: "LE ULTIME NEWS DI CASA PUCCI",
            }}
          ></h1>
        </div>
        <div className="section__content__wrapper-line-full py-6 ">
          <Slider data={data?.posts} />
        </div>
      </AnimateSection>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: "PASTORI" }}></h1>
        </div>

        <AnimateSection className="section__content">
          <FilteringListPastori
            type="pastori"
            data={data?.ctpPastores?.edges}
          />
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

        <div className="section__content__wrapper__container__inverse">
          <AnimateSection className="section__content section__content__wrapper-line-full">
            <ParallaxImage
              src="https://backend.dicasapucci.com/wp-content/uploads/2023/12/cucciolo_pastore_2.jpeg"
              alt="hero"
              height={600}
            >
              <div className="text-parallax-image">
                <span className="font-light">FORTI E SANI,</span>
                <span className="font-bold">SI NASCE.</span>
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
            <p className="text-center !font-bold !mb-0 italic">
              Inseguiamo la perfezione
            </p>
            <p className="text-center mt-0">
              studiando attentamente ogni accoppiamento
            </p>
            <div className="section__content__wrapper-cta"></div>
          </AnimateSection>
        </div>
        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line bg-black-content">
            <div className="section__content__wrapper-cta">
              <Button link="allevamento" type="secondary">
                TORNA ALL'ALLEVAMENTO
              </Button>
            </div>
          </div>
        </AnimateSection>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllPastori(preview);

  return {
    props: { data, preview },
    revalidate: 10,
  };
};
