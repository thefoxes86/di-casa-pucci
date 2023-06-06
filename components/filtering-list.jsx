import FilteringButtons from './filtering-buttons'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import IcoMaschio from '../public/images/ico_maschio.svg'
import IcoFemmina from '../public/images/ico_femmina.svg'

const FilteringList = ({ data, type }) => {
  const [displayData, setDisplayData] = useState(data)
  const [active, setActive] = useState('tutti')

  const handleCategoryClick = category => {
    if (category === active) return
    setActive(category)
    setDisplayData([])

    if (category === 'tutti') {
      setDisplayData(data)
      return
    }

    const filteredData = data.filter(item => {
      return (
        item?.node?.schedaDobermann?.dobSex?.name?.toLowerCase() === category
      )
    })

    setTimeout(() => {
      setDisplayData(filteredData)
    }, 400)
  }

  useEffect(() => {
    setDisplayData(data)
  }, [data])

  return (
    <div>
      <FilteringButtons active={active} handleClick={handleCategoryClick} />

      <div className="filtering__list">
        <AnimatePresence>
          {displayData?.map((item, i) => (
            <motion.div
              className="filtering__list__item"
              key={i}
              layout
              initial={{ transform: 'translateY(0)', opacity: 0 }}
              animate={{ transform: 'translateY(10px)', opacity: 1 }}
              exit={{ transform: 'translateY(0)', opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/dobermann/${item?.node?.slug}`}>
                <motion.img
                  src={
                    item?.node?.featuredImage?.node?.sourceUrl ||
                    'https://placehold.co/400'
                  }
                  alt="nothing"
                  width="100%"
                />
                <motion.p className="name">
                  {item?.node?.schedaDobermann?.dobNome || 'SENZA NOME'}
                </motion.p>
                <motion.p className="allevamento">
                  {item?.node?.schedaDobermann?.dobAllevatore ||
                    'senza allevatore'}
                </motion.p>
                <Image
                  src={
                    item?.node?.schedaDobermann?.dobSex?.name === 'Maschio'
                      ? IcoMaschio
                      : IcoFemmina
                  }
                  className="sex"
                  alt="Sesso"
                  width={50}
                  height={50}
                />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default FilteringList
