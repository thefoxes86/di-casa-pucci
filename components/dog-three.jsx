import Link from 'next/link'
import Image from 'next/image'
import IcoMaschio from '../public/images/ico_maschio.svg'
import IcoFemmina from '../public/images/ico_femmina.svg'
import DogThreeParent from './dog-three-parent'
import DogThreeDetailed from './dog-three-detailed'
import { Suspense } from 'react'

const DogThree = ({ schedaDobermann, primaryDog }) => {
  console.log('schedaDobermann', schedaDobermann)
  return (
    <div className="dog__three">
      <div className="primary-dog">
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            loading="lazy"
            src={
              primaryDog?.image?.node?.sourceUrl ||
              'http://backend.dicasapucci.com/wp-content/uploads/2023/07/placeholder_dobermann_dicasapucci.png'
            }
            className="primary-dog__image"
            alt={primaryDog?.name}
            width={100}
            height={100}
          />
        </Suspense>
        <p
          className="primary-dog__name"
          dangerouslySetInnerHTML={{ __html: primaryDog?.name || 'n/a' }}
        />
        <p
          className="primary-dog__allevatore"
          dangerouslySetInnerHTML={{
            __html: primaryDog?.allevatore || 'n/a',
          }}
        />
        <Image
          loading="lazy"
          src={primaryDog?.sesso === 'Maschio' ? IcoMaschio : IcoFemmina}
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
        <DogThreeParent data={schedaDobermann?.dobPadre} />
        <DogThreeParent data={schedaDobermann?.dobMadre} />
      </div>

      <DogThreeDetailed data={schedaDobermann} />
    </div>
  )
}

export default DogThree
