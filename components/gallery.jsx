// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const Gallery = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        initialSlide={1}
        spaceBetween={10}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
      >
        {images?.map((image, i) => (
          <SwiperSlide>
            <div className="container_swiper_item">
              <img src={image.sourceUrl} alt="hero" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Gallery
