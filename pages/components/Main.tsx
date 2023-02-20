import Image from 'next/image'
import Cards from './Cards'
import VideoPlay from './VideoPlay'
import Info from '../../public/Count-31.png'

//import component
import IconPengumpulan from '../../public/pengumpulan.svg'
import IconPendistribusian from '../../public/pendistribusian.svg'

const Main = () => {
  return (
    <div className='flex flex-row flex-auto px-8'>
      <div className='flex flex-col flex-auto w-3/5 h-auto px-4'>
        <VideoPlay />
        <div className='flex flex-row justify-center items-end gap-6 mt-2'>
          <Cards
            icon={IconPengumpulan}
            title='Total Penghimpunan'
            date='Update 08 Februari 2023'
            count={1790208727}
          />
          <Cards
            icon={IconPendistribusian}
            title='Total Pendistribusian'
            date='Update 08 Februari 2023'
            count={1001392820}
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
