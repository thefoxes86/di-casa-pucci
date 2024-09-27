import Footer from "./footer";
import Meta from "./meta";
import { motion } from "framer-motion";
import Menu from "./menu";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <FloatingWhatsApp
        phoneNumber="+39 389 673 4987"
        accountName="Dario"
        statusMessage={"online"}
        chatMessage="Ciao, di cosa hai bisogno ?"
        className="floating-WA"
        avatar="/images/dario.png"
      />
      <div className="min-h-screen">
        <Menu />

        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
