import FilteringButtons from "./filtering-buttons";
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import IcoMaschio from "@/public/images/ico_maschio.svg";
import IcoFemmina from "@/public/images/ico_femmina.svg";

const FilteringList = ({ data, type, category = "dobermann" }) => {
  const [displayData, setDisplayData] = useState(data);
  const [active, setActive] = useState("tutti");

  const handleCategoryClick = (category) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "tutti") {
      setDisplayData(data);
      return;
    }

    const filteredData = data.filter((item) => {
      return (
        item?.node?.schedaDobermann?.dobSex?.name?.toLowerCase() === category
      );
    });

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 400);
  };

  useEffect(() => {
    console.log("RENDER LIST");
    setDisplayData(data);
  }, [data]);

  return (
    <div>
      <FilteringButtons active={active} handleClick={handleCategoryClick} />

      <div className="filtering__list">
        {displayData?.map((item, i) => (
          <>
            {console.log(item.node.schedaDobermann)}
            {item.node.schedaDobermann.dobVisibile ? (
              <motion.div
                className="filtering__list__item"
                key={i}
                layout
                initial={{ transform: "translateY(10px)", opacity: 0 }}
                whileInView={{ opacity: 1, transform: "translateY(0)" }}
                exit={{ transform: "translateY(0)", opacity: 0 }}
                transition={{ type: "spring", duration: 0.2, delay: i * 0.05 }}
              >
                <Link href={`${category}/${item?.node?.slug}`}>
                  <motion.div>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Image
                        loading="eager"
                        src={
                          item?.node?.featuredImage?.node?.sourceUrl ||
                          "https://backend.dicasapucci.com/wp-content/uploads/2023/07/placeholder_dobermann_dicasapucci.png"
                        }
                        alt="nothing"
                        width={100}
                        height={100}
                      />
                    </Suspense>
                  </motion.div>
                  <motion.p className="name">
                    {item?.node?.schedaDobermann?.dobNome || "n/a"}
                  </motion.p>
                  <motion.p className="allevamento">
                    {item?.node?.schedaDobermann?.dobAllevatore || "n/a"}
                  </motion.p>

                  <Image
                    loading="lazy"
                    src={
                      item?.node?.schedaDobermann?.dobSex?.name === "Maschio"
                        ? IcoMaschio
                        : IcoFemmina
                    }
                    className="sex"
                    alt="Sesso"
                    width={50}
                    height={50}
                    loader={(p) => p.src}
                  />
                </Link>
              </motion.div>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default FilteringList;
