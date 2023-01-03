import Cards from './Cards'
import VideoPlay from './VideoPlay'
import Info from '../../public/Contoh 16_9.jpg'
import Image from 'next/image'

const Main = () => {
  return (
    <div className='flex flex-row flex-auto px-8'>
      <div className='flex flex-col flex-auto w-3/5 py-4 px-4'>
        <VideoPlay />
        <div className='flex flex-row justify-end items-end gap-8 mt-2'>
          <Cards title='Total Penghimpunan' count={23450000950} />
          <Cards title='Total Pendistribusian' count={22450000670} />
        </div>
      </div>
      <div className='flex justify-center w-2/5 py-4 px-4'>
        <Image src={Info} alt='Info' height={560} />
      </div>
    </div>
  )
}

export default Main
