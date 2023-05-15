import Image from 'next/image'

type Props = {
  title: string
  date: string
  count: number
  icon?: any
}

const Cards = ({ title, date, count, icon }: Props) => {
  const RupiahFormat = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })

  return (
    <div className='flex flex-row justify-start max-w-md min-h-min gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <span className=' rounded-full flex justify-center items-center w-20 h-20 py-2 px-2 bg-green-100'>
        <Image src={icon} alt='icon' />
      </span>
      <div className='flex flex-col'>
        <p className='mb-3 text-2xl font-bold italic text-gray-700 dark:text-gray-400'>
          {title}
        </p>
        <h5 className='mb-2 text-3xl font-bold tracking-tight text-green-700  dark:text-white'>
          {RupiahFormat.format(count)}
        </h5>
        <span className='text-lg text-slate-500 font-semibold'>{date}</span>
      </div>
    </div>
  )
}

export default Cards
