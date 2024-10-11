import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/container";
import Layout from "@/components/layout";
import { getAllDobermann } from "@/lib/api";
import ParallaxImage from "@/components/parallax-image";
import ScrollParallaxComponent from "@/components/scroll-parallax-component";
import Button from "@/components/button";
import VirgoletteDestra from "@/public/images/virgolette-destra.svg";
import VirgoletteSinistra from "@/public/images/virgolette-sinistra.svg";
import Scrivici from "@/components/scrivici";
import FilteringList from "@/components/filtering-list";
import AnimateSection from "@/components/animateSection";

export default function Allevamento({ data, preview }) {
  return (
    <Layout preview={false} section={"dobermann"}>
      <Head>
        <title>{`DOBERMANN`}</title>
      </Head>

      <div className="w-screen h-[100vh] bg-black">
        <img
          src="/images/interna_desk_Doberman.jpg"
          className="w-full h-full object-cover md:flex hidden"
          alt="Dobermann"
        />
        <img
          src="/images/interna_mobile_Doberman.jpg"
          className="w-full h-full object-cover md:hidden flex"
          alt="Dobermann"
        />
      </div>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: "DOBERMANN" }}></h1>
        </div>
        <div className="section__content">
          <FilteringList type="dobermann" data={data.edges} />
        </div>
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
          <div className="section__content__wrapper-line-full">
            <ParallaxImage
              src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/CUCCIOLI@2x.png"
              alt="hero"
              height={400}
            >
              <div className="text-parallax-image">
                <span className="font-light">FORTI E SANI,</span>
                <span className="font-bold">SI NASCE.</span>
              </div>
            </ParallaxImage>
          </div>
        </AnimateSection>

        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line bg-black-content">
            <div className="section__content__wrapper-cta">
              <Button link="/cani-dobermann/allevamento" type="secondary">
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
  const data = await getAllDobermann(preview);

  return {
    props: { data, preview },
    revalidate: 10,
  };
};
