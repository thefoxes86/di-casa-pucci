import Container from "./container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import AnimateSection from "./animateSection";
import Scrivici from "./scrivici";
import { usePathname } from "next/navigation";

export default function Footer({ section }) {
  const pathname = usePathname();

  return (
    <>
      <AnimateSection className="section__content bg-black mt-6">
        <div className="section__content__wrapper-line-full py-6 bg-black-content-content">
          <Scrivici
            section={section}
            text="Siamo pronti a rispondere alle vostre domande e sempre disponibili a un incontro conoscitivo."
          />
        </div>
      </AnimateSection>
      <footer className=" bg-black footer">
        <div className="pb-28 flex flex-col items-center">
          <h3 className="text-lg font-bold tracking-tighter leading-tight text-center  mb-0 md:my-10 ">
            LE CERTIFICAZIONI
          </h3>

          <div className="flex flex-wrap content__certificazioni p-4">
            {pathname?.includes("pastori") || pathname?.includes("pastore") ? (
              <AnimateSection
                delay={0.4}
                className="w-1/4 flex flex-col items-center justify-center px-4"
              >
                <img
                  src="https://backend.dicasapucci.com/wp-content/uploads/2023/12/logo-pastori.png"
                  alt="certificazione 1"
                />
                <p className="font-thin py-3 text-center text-xs h-20 !mb-0">
                  Società Amatori Schäferhunde
                </p>
              </AnimateSection>
            ) : (
              <>
                <AnimateSection className="w-1/4 flex flex-col items-center justify-center px-4">
                  <img
                    src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/logo-hi@2x.png"
                    alt="certificazione 1"
                  />
                  <p className="font-thin py-3 text-center text-xs h-20 !mb-0">
                    Associazione Italiana Amatori Dobermann
                  </p>
                </AnimateSection>
                <AnimateSection
                  delay={0.4}
                  className="w-1/4 flex flex-col items-center justify-center px-4"
                >
                  <img
                    src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/DicasaPucci_IDC_Logo@2x@2x.png"
                    alt="certificazione 1"
                  />
                  <p className="font-thin py-3 text-center text-xs h-20 !mb-0">
                    Internationaler Dobermann Club
                  </p>
                </AnimateSection>
              </>
            )}
            <AnimateSection
              delay={0.8}
              className="w-1/4 flex flex-col items-center justify-center px-4"
            >
              <img
                src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/DicasaPucci_FCI_Logo@2x@2x.png"
                alt="certificazione 1"
              />
              <p className="font-thin py-3 text-center text-xs h-20  !mb-0">
                Federation Cynologique Internationale
              </p>
            </AnimateSection>
            <AnimateSection
              delay={1.2}
              className="w-1/4 flex flex-col items-center justify-center px-4"
            >
              <img
                src="https://backend.dicasapucci.com/wp-content/uploads/2023/05/DicasaPucci_ENCI_Logo@2x@2x.png"
                alt="certificazione 1"
              />
              <p className="font-thin py-3 text-center text-xs h-20  !mb-0">
                Ente Nazionale Cinofilia Italiana
              </p>
            </AnimateSection>
          </div>
          <div className="w-100 flex flex-col items-center justify-center mt-10">
            <div className="flex justify-around mb-6">
              <p className="pr-2 text-right">
                <Link href="https://www.facebook.com/dicasapucci/">
                  <Image
                    src={"/images/icon-facebook.svg"}
                    alt="Facebook Link"
                    width={32}
                    height={32}
                  />
                </Link>
              </p>
              <p className="pl-2 text-left">
                <Link href="https://www.instagram.com/dicasapucci/">
                  <Image
                    src={"/images/icon-instagram.svg"}
                    alt="Facebook Link"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                </Link>
              </p>
            </div>
            <p className="font-bold m-0 p-0 text-center !mb-0">Di Casa Pucci</p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              P.Iva: 01598700498
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              Via Ferrara, 138 - 55054 Stiava (LU)
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              +39 348 43 95 808
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              info@dicasapucci.com
            </p>
            <p className="font-thin mt-2 p-0 text-center !mb-0">
              © Copyright 2023
            </p>
            <p className="font-thin m-0 p-0 text-center !mb-0">
              Privacy & Cookie Policy
            </p>
            <p className="font-thin mt-2 p-0 text-center !mb-0">
              Credits: xdesigners.it
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
