import Image from 'next/image'
import IcoMaschio from '../public/images/ico_maschio.svg'
import IcoFemmina from '../public/images/ico_femmina.svg'

const DogThreeParent = ({ data }) => {
  return (
    <div className="parents-dog__item">
      <Image
        src={data?.featuredImage?.node.sourceUrl || 'https://placehold.co/400'}
        className="parents-dog__image"
        alt={data?.title}
        width={100}
        height={100}
      />
      <p
        className="parents-dog__name"
        dangerouslySetInnerHTML={{
          __html: data?.schedaDobermann?.dobNome || 'SENZA NOME',
        }}
      />
      <p
        className="parents-dog__allevatore"
        dangerouslySetInnerHTML={{
          __html: data?.schedaDobermann?.dobAllevatore || 'senza allevatore',
        }}
      />

      <Image
        src={
          data?.schedaDobermann?.dobSex?.name === 'Maschio'
            ? IcoMaschio
            : IcoFemmina
        }
        alt="Icona"
        width={50}
        height={50}
        className="parents-dog__icon-sex"
      />
    </div>
  )
}

export default DogThreeParent
