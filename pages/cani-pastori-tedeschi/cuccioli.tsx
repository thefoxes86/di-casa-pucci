import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/container";
import Layout from "@/components/layout";
import { getAllCuccioli } from "@/lib/api";
import ParallaxImage from "@/components/parallax-image";
import Button from "@/components/button";

import FilteringList from "@/components/filtering-list";
import AnimateSection from "@/components/animateSection";
export default function Cuccioli({ data, preview }) {
  return (
    <Layout preview={false} section="pastori">
      <Head>
        <title>{`CUCCIOLI`}</title>
      </Head>

      <Container>
        <div className="px-6">
          <h1 dangerouslySetInnerHTML={{ __html: "CUCCIOLI" }}></h1>
          <h2>
            {" "}
            LA FORZA E IL BENESSERE
            <span className="block w-100">
              SONO <span className="font-bold"> DI CASA PUCCI</span>
            </span>
          </h2>
          <p className="italic">
            Fin dalla nascita selezioniamo i Pastori tedeschi migliori secondo
            Benessere, Forza e Bellezza.
          </p>
        </div>

        <AnimateSection className="section__content">
          <FilteringList type="pastore" data={data.edges} category="cuccioli" />
        </AnimateSection>
        <div className="section__content__wrapper__container">
          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line bg-black-content">
              <div className="section__content__wrapper-text italic">
                <p>
                  Il Pastore Tedesco è la perfetta incarnazione di forza,
                  intelligenza e lealtà. Sempre vigile, affidabile e protettivo,
                  ma anche affettuoso e giocoso. Pieno di coraggio e dedizione,
                  un compagno instancabile e premuroso. Sempre al tuo fianco, un
                  amico sincero e fedele, pronto a condividere ogni momento
                  della tua vita.
                </p>
              </div>
            </div>
          </AnimateSection>

          <AnimateSection className="section__content">
            <div className="section__content__wrapper-line-full">
              <ParallaxImage
                src="https://backend.dicasapucci.com/wp-content/uploads/2024/04/2B3E54D2-E9CE-491B-AD4A-F681273FBD7C.jpeg"
                alt="hero"
                height={600}
              >
                <div className="text-parallax-image">
                  <span className="font-light">LA PERFEZIONE,</span>
                  <span className="font-bold">S’INSEGUE.</span>
                </div>
              </ParallaxImage>
            </div>
          </AnimateSection>
        </div>
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

        <AnimateSection className="section__content">
          <div className="section__content__wrapper-line">
            <div className="section__content__wrapper-text italic">
              <p>
                <span className="font-bold"> Inseguiamo la perfezione</span>{" "}
                studiando attentamente ogni accoppiamento.
              </p>
            </div>
            <div className="section__content__wrapper-cta">
              <Button
                link="/cani-pastori-tedeschi/accoppiamento"
                type="secondary"
              >
                L'ACCOPPIAMENTO
              </Button>
            </div>
          </div>
        </AnimateSection>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllCuccioli(preview);

  return {
    props: { data, preview },
    revalidate: 10,
  };
};
