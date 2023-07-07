import Avatar from './avatar'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Image from 'next/image'
import IcoMaschio from '../public/images/ico_maschio.svg'
import IcoFemmina from '../public/images/ico_femmina.svg'

export default function PostHeader({ title, coverImage, sesso, allevatore }) {
  return (
    <div className="header__zoom_detail">
      <PostTitle>{title}</PostTitle>
      <div className="text-sm font-thin">{allevatore}</div>
      <div className="text-xs font-thin ">
        <Image
          src={sesso === 'Maschio' ? IcoMaschio : IcoFemmina}
          alt="Icona"
          width={50}
          height={50}
          className="header__zoom_detail__icon-sex"
          loading="lazy"
        />
      </div>
    </div>
  )
}
