// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const Gallery = () => {
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
        <SwiperSlide>
          <div className="container_swiper_item">
            <img
              src="https://www.dicasapucci.com/wp-content/uploads/2023/05/cani1.png"
              alt="hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container_swiper_item">
            <img
              src="https://www.dicasapucci.com/wp-content/uploads/2023/05/cani1.png"
              alt="hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container_swiper_item">
            <img
              src="https://www.dicasapucci.com/wp-content/uploads/2023/05/cani1.png"
              alt="hero"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Gallery
