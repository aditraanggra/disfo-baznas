import Cards from './Cards'
import VideoPlay from './VideoPlay'
import Info from '../../public/count-77.png'
import Image from 'next/image'

const Main = () => {
  return (
    <div className='flex flex-row flex-auto px-8'>
      <div className='flex flex-col flex-auto w-3/5 h-auto py-8 px-6'>
        <VideoPlay />
        <div className='flex flex-row justify-end items-end gap-12 mt-2'>
          <Cards
            title='Total Penghimpunan'
            date='Per 04 Januari 2023'
            count={81289941}
          />
          <Cards
            title='Total Pendistribusian'
            date='Per 04 Januari 2023'
            count={0}
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
