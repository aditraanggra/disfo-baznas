import Image from 'next/image'
import Cards from './Cards'
import VideoPlay from './VideoPlay'
import Info from '../../public/pimpinan.jpg'

//import component
import IconPengumpulan from '../../public/pengumpulan.svg'
import IconPendistribusian from '../../public/pendistribusian.svg'

const Main = () => {
  return (
    <div className='flex flex-row flex-auto px-8'>
      <div className='flex flex-col flex-auto w-3/5 h-auto px-4'>
        <div className='basis-3/4'>
          <VideoPlay />
        </div>
        <div className='basis-1/4 flex flex-row justify-start items-baseline gap-6'>
          <Cards
            icon={IconPengumpulan}
            title='Total Penghimpunan'
            date='Update 05 Juni 2023'
            count={10958762240}
          />
          <Cards
            icon={IconPendistribusian}
            title='Total Pendistribusian'
            date='Update 05 Juni 2023'
            count={4974207431}
          />
        </div>
      </div>
      <div className='flex justify-center w-2/5'>
        <Image
          src={Info}
          alt='Info'
          className='object-cover object-top w-3/4'
        />
      </div>
    </div>
  )
}

export default Main
