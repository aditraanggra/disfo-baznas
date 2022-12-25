import Slider from 'react-slick'

const ContentSlider = () => {
  const setting = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    fade: true,
    dots: true,
  }
  return (
    <Slider className='flex flex-col overflow-x-hidden' {...setting}>
      <div className='bg-red-500 h-64 w-3/4 '>1</div>
      <div className='bg-red-500 h-64 w-3/4 '>2</div>
      <div className='bg-red-500 h-64 w-3/4 '>3</div>
      <div className='bg-red-500 h-64 w-3/4 '>4</div>
    </Slider>
  )
}

export default ContentSlider
