import Link from 'next/link'
import Image from 'next/image'
import IcoMaschio from '../public/images/ico_maschio.svg'
import IcoFemmina from '../public/images/ico_femmina.svg'
import DogThreeParent from './dog-three-parent'
import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'

const DogThreeDetailed = ({ data }) => {
  const [openPadre, setOpenPadre] = useState(false)
  const [openMadre, setOpenMadre] = useState(false)

  const handleClickPadre = () => {
    setOpenPadre(!openPadre)
    openMadre && setOpenMadre(false)
  }
  const handleClickMadre = () => {
    setOpenMadre(!openMadre)
    openPadre && setOpenPadre(false)
  }
  return (
    <>
      <div className="flex justify-around items-center w-full h-10 my-4 gap-1">
        <div className="icon-plus">
          <span onClick={handleClickPadre}>{openPadre ? '-' : '+'}</span>
        </div>
        <div className="icon-plus">
          <span onClick={handleClickMadre}>{openMadre ? '-' : '+'}</span>
        </div>
      </div>
      {openPadre && (
        <div className="dog__three">
          <div className="primary-dog">
            <Image
              loading="lazy"
              src={
                data.dobPadre?.featuredImage?.node?.sourceUrl ||
                'https://backend.dicasapucci.com/wp-content/uploads/2023/07/placeholder_dobermann_dicasapucci.png'
              }
              className="primary-dog__image"
              alt={data.dobPadre?.schedaDobermann?.dobNome}
              width={100}
              height={100}
            />
            <p
              className="primary-dog__name"
              dangerouslySetInnerHTML={{
                __html: data.dobPadre?.schedaDobermann?.dobNome || 'n/a',
              }}
            />
            <p
              className="primary-dog__allevatore"
              dangerouslySetInnerHTML={{
                __html: data.dobPadre?.schedaDobermann?.dobAllevatore || 'n/a',
              }}
            />
            <Image
              loading="lazy"
              src={
                data.dobPadre?.dobSex?.name === 'Maschio'
                  ? IcoMaschio
                  : IcoFemmina
              }
              alt="Icona Maschio"
              width={50}
              height={50}
              className="primary-dog__icon-sex"
            />
          </div>
          <div className="three-line">
            <div className="three-line__item"></div>
            <div className="three-line__item-horizontal"></div>
          </div>
          <div className="parents-dog">
            <DogThreeParent data={data.dobPadre?.schedaDobermann?.dobPadre} />
            <DogThreeParent data={data.dobPadre?.schedaDobermann?.dobMadre} />
          </div>

          <div className="flex">
            <div className="three-line w-1/2">
              <div className="three-line__item"></div>
              <div className="three-line__item-horizontal"></div>
            </div>

            <div className="three-line w-1/2">
              <div className="three-line__item"></div>
              <div className="three-line__item-horizontal"></div>
            </div>
          </div>

          <div className="parents-dog">
            <DogThreeParent
              data={
                data.dobPadre?.schedaDobermann?.dobPadre.schedaDobermann
                  ?.dobPadre
              }
            />
            <DogThreeParent
              data={
                data.dobPadre?.schedaDobermann?.dobPadre.schedaDobermann
                  ?.dobMadre
              }
            />

            <DogThreeParent
              data={
                data.dobPadre?.schedaDobermann?.dobMadre?.schedaDobermann
                  ?.dobPadre
              }
            />
            <DogThreeParent
              data={
                data.dobPadre?.schedaDobermann?.dobMadre?.schedaDobermann
                  ?.dobMadre
              }
            />
          </div>
        </div>
      )}
      {openMadre && (
        <div className="dog__three">
          <div className="primary-dog">
            <Image
              loading="lazy"
              src={
                data.dobMadre?.featuredImage?.node?.sourceUrl ||
                'https://backend.dicasapucci.com/wp-content/uploads/2023/06/woocommerce-placeholder.png'
              }
              className="primary-dog__image"
              alt={data.dobMadre?.schedaDobermann?.dobNome}
              width={100}
              height={100}
            />
            <p
              className="primary-dog__name"
              dangerouslySetInnerHTML={{
                __html: data.dobMadre?.schedaDobermann?.dobNome || 'n/a',
              }}
            />
            <p
              className="primary-dog__allevatore"
              dangerouslySetInnerHTML={{
                __html: data.dobMadre?.schedaDobermann?.dobAllevatore || 'n/a',
              }}
            />
            <Image
              loading="lazy"
              src={
                data.dobMadre?.dobSex?.name === 'Maschio'
                  ? IcoMaschio
                  : IcoFemmina
              }
              alt="Icona Maschio"
              width={50}
              height={50}
              className="primary-dog__icon-sex"
            />
          </div>
          <div className="three-line">
            <div className="three-line__item"></div>
            <div className="three-line__item-horizontal"></div>
          </div>
          <div className="parents-dog">
            <DogThreeParent data={data.dobMadre?.schedaDobermann?.dobPadre} />
            <DogThreeParent data={data.dobMadre?.schedaDobermann?.dobMadre} />
          </div>
          <div className="flex">
            <div className="three-line w-1/2">
              <div className="three-line__item"></div>
              <div className="three-line__item-horizontal"></div>
            </div>

            <div className="three-line w-1/2">
              <div className="three-line__item"></div>
              <div className="three-line__item-horizontal"></div>
            </div>
          </div>
          <div className="parents-dog">
            <DogThreeParent
              data={
                data.dobMadre?.schedaDobermann?.dobPadre?.schedaDobermann
                  ?.dobPadre
              }
            />
            <DogThreeParent
              data={
                data.dobMadre?.schedaDobermann?.dobPadre?.schedaDobermann
                  ?.dobMadre
              }
            />
            <DogThreeParent
              data={
                data.dobMadre?.schedaDobermann?.dobMadre?.schedaDobermann
                  ?.dobPadre
              }
            />
            <DogThreeParent
              data={
                data.dobMadre?.schedaDobermann?.dobMadre?.schedaDobermann
                  ?.dobMadre
              }
            />
          </div>
        </div>
      )}
    </>
  )
}

export default DogThreeDetailed
