import Image from 'next/image'
import Slider from 'react-slick'
import Info from '../../public/Count-50.png'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div className='flex justify-center w-2/5 py-4 px-4 bg-slate-600 h-16'>
        <span className='text-xl text-center text-blue-800'>
          {/* <Image src={Info} alt='Info' className='img-opt' /> */}1
        </span>
      </div>
      <div className='flex justify-center w-2/5 py-4 px-4 bg-slate-600 h-16'>
        <span className='text-xl text-center text-blue-800'>
          {/* <Image src={Info} alt='Info' className='img-opt' /> */}2
        </span>
      </div>
      <div className='flex justify-center w-2/5 py-4 px-4 bg-slate-600 h-16'>
        <span className='text-xl text-center text-blue-800'>
          {/* <Image src={Info} alt='Info' className='img-opt' /> */}3
        </span>
      </div>
      <div className='flex justify-center w-2/5 py-4 px-4 bg-slate-600 h-16'>
        <span className='text-xl text-center text-blue-800'>
          {/* <Image src={Info} alt='Info' className='img-opt' /> */}4
        </span>
      </div>
    </Slider>
  )
}

export default Carousel
