// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import Button from './button'

const Slider = () => {
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
            <span>29 gen 2023</span>
            <h3>Sono nati i cuccioli Nagini</h3>

            <p>Sono nati i cuccioli della nostra canetta prefeirta</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container_swiper_item">
            <img
              src="https://www.dicasapucci.com/wp-content/uploads/2023/05/cani1.png"
              alt="hero"
            />
            <span>29 gen 2023</span>
            <h3>Sono nati i cuccioli Nagini</h3>

            <p>Sono nati i cuccioli della nostra canetta prefeirta</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container_swiper_item">
            <img
              src="https://www.dicasapucci.com/wp-content/uploads/2023/05/cani1.png"
              alt="hero"
            />
            <span>29 gen 2023</span>
            <h3>Sono nati i cuccioli Nagini</h3>

            <p>Sono nati i cuccioli della nostra canetta prefeirta</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="py-6 text-center">
        <Button type="primary" link="/news">
          TUTTE LE NEWS
        </Button>
      </div>
    </>
  )
}

export default Slider
