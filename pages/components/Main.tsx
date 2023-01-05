import Image from 'next/image'
import Cards from './Cards'
import VideoPlay from './VideoPlay'
import Info from '../../public/count-76.png'

import IconPengumpulan from '../../public/pengumpulan.svg'
import IconPendistribusian from '../../public/pendistribusian.svg'

const Main = () => {
  return (
    <div className='flex flex-row flex-auto px-8'>
      <div className='flex flex-col flex-auto w-3/5 h-auto px-4'>
        <VideoPlay />
        <div className='flex flex-row justify-end items-end gap-6 mt-2'>
          <Cards
            icon={IconPengumpulan}
            title='Total Penghimpunan'
            date='Update 04 Januari 2023'
            count={81289941}
          />
          <Cards
            icon={IconPendistribusian}
            title='Total Pendistribusian'
            date='Update 04 Januari 2023'
            count={385643061}
          />
        </div>
      </div>
      <div className='flex justify-center w-2/5 py-4 px-4'>
        <Image src={Info} alt='Info' className='img-opt' />
      </div>
    </div>
  )
}

export default Main
