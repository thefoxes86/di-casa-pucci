import Link from "next/link";
import { motion } from "framer-motion";

const itemsMenu = [
  {
    name: "I Dobermann",
    link: "/allevamento",
  },
  {
    name: "I Pastori",
    link: "/pastori",
  },
  {
    name: "I Cuccioli",
    link: "/cuccioli",
  },
  {
    name: "L'Accoppiamento",
    link: "/accoppiamento",
  },
  {
    name: "L'Addestramento",
    link: "/addestramento",
  },

  {
    name: "Le News",
    link: "/news",
  },

  {
    name: "Di Casa Pucci",
    link: "/di-casa-pucci",
  },

  {
    name: "Contatti",
    link: "/contatti",
  },
];

const variantsContainer = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const MenuItem = ({ children, section, ...props }) => {
  const itemsMenu = [
    {
      name: `${
        section === "dobermann" ? "I Dobermann" : " I Pastori Tedeschi"
      }`,
      link: `${
        section === "dobermann"
          ? "/cani-dobermann/allevamento"
          : "/cani-pastori-tedeschi/allevamento"
      }`,
    },
    {
      name: "I Cuccioli",
      link: `${
        section === "dobermann"
          ? "/cani-dobermann/cuccioli"
          : "/cani-pastori-tedeschi/cuccioli"
      }`,
    },
    {
      name: "L'Accoppiamento",
      link: `${
        section === "dobermann"
          ? "/cani-dobermann/accoppiamento"
          : "/cani-pastori-tedeschi/accoppiamento"
      }`,
    },
    {
      name: "L'Addestramento",
      link: `${
        section === "dobermann"
          ? "/cani-dobermann/addestramento"
          : "/cani-pastori-tedeschi/addestramento"
      }`,
    },

    {
      name: "Le News",
      link: `${
        section === "dobermann"
          ? "/cani-dobermann/news"
          : "/cani-pastori-tedeschi/news"
      }`,
    },

    {
      name: "Di Casa Pucci",
      link: `${
        section === "dobermann"
          ? "/cani-dobermann/di-casa-pucci"
          : "/cani-pastori-tedeschi/di-casa-pucci"
      }`,
    },

    {
      name: "Contatti",
      link: `${
        section === "dobermann"
          ? "/cani-dobermann/contatti"
          : "/cani-pastori-tedeschi/contatti"
      }`,
    },
  ];
  return (
    <motion.div variants={variantsContainer}>
      {itemsMenu.map((item, index) => (
        <motion.div
          className="menu-item"
          variants={variantsItem}
          whileHover={{ color: "white" }}
          whileTap={{ color: "white" }}
          key={index}
          onClick={props.toggleOpen}
        >
          <Link
            className="menu-item__link"
            href={item.link}
            dangerouslySetInnerHTML={{ __html: item.name }}
          ></Link>
        </motion.div>
      ))}
      <motion.div
        className="menu-item special"
        variants={variantsItem}
        whileHover={{ color: "white" }}
        whileTap={{ color: "white" }}
        key={"extra"}
        onClick={props.toggleOpen}
      >
        <Link
          className="menu-item__link"
          href={`${
            section === "dobermann"
              ? "/cani-pastori-tedeschi/pastori"
              : "/cani-dobermann/dobermann"
          }`}
          dangerouslySetInnerHTML={{
            __html: `${
              section === "dobermann"
                ? "Vai ai pastori tedeschi"
                : "Vai ai dobermann"
            }`,
          }}
        ></Link>
      </motion.div>
    </motion.div>
  );
};

export default MenuItem;
