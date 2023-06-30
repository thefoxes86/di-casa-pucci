// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { Navigation } from 'swiper'
import moment from 'moment'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import Button from './button'

const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        initialSlide={1}
        spaceBetween={10}
        centeredSlides={true}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
      >
        {data?.edges ? (
          data?.edges.map((item, index) => (
            <SwiperSlide>
              <Link href={`/posts/${item.node?.slug}`}>
                <div className="container_swiper_item">
                  <img
                    src={item.node?.featuredImage?.node?.sourceUrl || ''}
                    alt="hero"
                  />
                  <span>{moment(item.node?.date).format()}</span>
                  <h3>{item.node?.title}</h3>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.node?.excerpt.substring(0, 100) + ' ...',
                    }}
                  ></p>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <div className="text-center"></div>
        )}
      </Swiper>
      {data?.edges ? (
        <div className="py-6 text-center">
          <Button type="primary" link="/news">
            TUTTE LE NEWS
          </Button>
        </div>
      ) : null}
    </>
  )
}

export default Slider
