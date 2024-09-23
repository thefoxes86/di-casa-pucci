import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAbout } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Scrivici from "../components/scrivici";

import ParallaxImage from "../components/parallax-image";
import ScrollParallaxComponent from "../components/scroll-parallax-component";
import VirgoletteDestra from "../public/images/virgolette-destra.svg";
import VirgoletteSinistra from "../public/images/virgolette-sinistra.svg";
import Button from "../components/button";
import AnimateSection from "../components/animateSection";

export default function About({ data, preview }) {
  return (
    <Layout preview={false}>
      <Head>
        <title>{`${data.title}`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p
            className="px-12"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></p>
        </div>
        <div className="section__content__wrapper__container">
          <AnimateSection className="section__content section__content__wrapper-line-full mt-16">
            <ParallaxImage
              src="https://backend.dicasapucci.com/wp-content/uploads/2023/06/Lallevalemto.png"
              alt="hero"
              height={400}
            >
              <div className="text-parallax-image">
                <span className="font-light">L'ECCELLENZA DELLA RAZZA,</span>
                <span className="font-bold">SI SENTE.</span>
              </div>
            </ParallaxImage>
          </AnimateSection>
          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line bg-black-content">
              <div className="section__content__wrapper-text">
                <p>
                  Mi chiamo <span className="font-bold"> Dario Pucci</span> e
                  sono titolare Di Casa Pucci, azienda leader nel settore
                  dell’allevamento di cani di{" "}
                  <span className="font-bold"> razza Dobermann.</span>
                </p>
              </div>
              <div className="section__content__wrapper-cta">
                <Button link="/dobermann" type="secondary">
                  I NOSTRI DOBERMANN
                </Button>
              </div>
            </div>
          </AnimateSection>
        </div>
        <div className="section__content__wrapper__container__inverse">
          <AnimateSection className="section__content section__content__wrapper-line-full">
            <Container>
              <ParallaxImage
                src="https://backend.dicasapucci.com/wp-content/uploads/2024/05/5F9F3A5A-7473-4477-9E54-51EFC62B5069-scaled.jpeg"
                alt="hero"
                height={400}
              >
                <div className="text-parallax-image">
                  <span className="font-light">ELEGANTI E MAESTOSI,</span>
                  <span className="font-bold">I NOSTRI PASTORI.</span>
                </div>
              </ParallaxImage>
            </Container>
          </AnimateSection>

          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line bg-black-content">
              <Container>
                <div className="section__content__wrapper-text italic">
                  <p>
                    Di Casa Pucci è leader anche negli allevamenti di{" "}
                    <span className="font-bold"> pastori</span>.
                  </p>
                </div>
                <div className="section__content__wrapper-cta">
                  <Button link="/pastori" type="secondary">
                    I PASTORI
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
  const data = await getAbout(preview);

  return {
    props: { data, preview },
    revalidate: 10,
  };
};
