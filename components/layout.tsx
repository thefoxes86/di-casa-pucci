import Footer from "./footer";
import Meta from "./meta";
import { motion } from "framer-motion";
import Menu from "./menu";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FC } from "react";

interface LayoutProps {
  preview?: boolean;
  children: any;
  section: "pastori" | "dobermann";
}

const Layout: FC<LayoutProps> = ({ preview, children, section }) => {
  return (
    <>
      <Meta />
      <FloatingWhatsApp
        phoneNumber="+393484395808"
        accountName="Dario"
        statusMessage={"online"}
        chatMessage="Ciao, di cosa hai bisogno ?"
        className="floating-WA"
        avatar="/images/dario.png"
      />
      <div className="min-h-screen">
        <Menu section={section} />

        <main>{children}</main>
      </div>
      <Footer section={section} />
    </>
  );
};

export default Layout;
