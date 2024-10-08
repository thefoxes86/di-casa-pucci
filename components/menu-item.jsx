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
const MenuItem = ({ children, ...props }) => {
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
    </motion.div>
  );
};

export default MenuItem;
