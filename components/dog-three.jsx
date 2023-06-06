import Link from 'next/link'
import Image from 'next/image'
import IcoMaschio from '../public/images/ico_maschio.svg'
import IcoFemmina from '../public/images/ico_femmina.svg'
import DogThreeParent from './dog-three-parent'

const DogThree = ({ schedaDobermann, primaryDog }) => {
  console.log('schedaDobermann', schedaDobermann)
  return (
    <div className="dog__three">
      <div className="primary-dog">
        <Image
          src={
            primaryDog?.image?.node?.sourceUrl ||
            'https://www.dicasapucci.com/wp-content/uploads/2023/06/woocommerce-placeholder.png'
          }
          className="primary-dog__image"
          alt={primaryDog?.name}
          width={100}
          height={100}
        />
        <p
          className="primary-dog__name"
          dangerouslySetInnerHTML={{ __html: primaryDog?.name || 'SENZA NOME' }}
        />
        <p
          className="primary-dog__allevatore"
          dangerouslySetInnerHTML={{
            __html: primaryDog?.allevatore || 'senza allevatore',
          }}
        />
        <Image
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
      <div className="parents-dog">
        <DogThreeParent data={schedaDobermann?.dobPadre} />
        <DogThreeParent data={schedaDobermann?.dobPadre} />
      </div>
      <p>
        Madre:{' '}
        <Link
          href={`/dobermans/${schedaDobermann?.dobMadre?.slug}`}
          dangerouslySetInnerHTML={{ __html: schedaDobermann?.dobMadre?.title }}
        ></Link>
      </p>
      <p>
        Nonna:{' '}
        <Link
          href={`/dobermans/${schedaDobermann?.dobMadre?.schedaDobermann?.dobMadre?.slug}`}
          dangerouslySetInnerHTML={{
            __html: schedaDobermann?.dobMadre?.schedaDobermann?.dobMadre?.title,
          }}
        ></Link>
      </p>
      <p>
        BisNonna:{' '}
        <Link
          href={`/dobermans/${schedaDobermann?.dobMadre?.schedaDobermann?.dobMadre?.schedaDobermann?.dobMadre?.slug}`}
          dangerouslySetInnerHTML={{
            __html:
              schedaDobermann?.dobMadre?.schedaDobermann?.dobMadre
                ?.schedaDobermann?.dobMadre?.title,
          }}
        ></Link>
      </p>
      <p>
        Padre:{' '}
        <Link
          href={`/dobermans/${schedaDobermann?.dobPadre?.slug}`}
          dangerouslySetInnerHTML={{ __html: schedaDobermann?.dobPadre?.title }}
        ></Link>
      </p>
      <p>
        Nonno:{' '}
        <Link
          href={`/dobermans/${schedaDobermann?.dobPadre?.schedaDobermann?.dobPadre?.slug}`}
          dangerouslySetInnerHTML={{
            __html: schedaDobermann?.dobPadre?.schedaDobermann?.dobPadre?.title,
          }}
        ></Link>
      </p>
      <p>
        BisNonno:{' '}
        <Link
          href={`/dobermans/${schedaDobermann?.dobPadre?.schedaDobermann?.dobPadre?.schedaDobermann?.dobPadre?.slug}`}
          dangerouslySetInnerHTML={{
            __html:
              schedaDobermann?.dobPadre?.schedaDobermann?.dobPadre
                ?.schedaDobermann?.dobPadre?.title,
          }}
        ></Link>
      </p>
    </div>
  )
}

export default DogThree
