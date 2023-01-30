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
    <div className='flex flex-col justify-center items-center w-2/4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <span className=' rounded-full flex justify-center items-center w-1/3 h-auto py-4 px-4 bg-green-100 mb-4'>
        <Image src={icon} alt='icon' />
      </span>
      <p className='mb-3 text-2xl font-bold italic text-gray-700 dark:text-gray-400'>
        {title}
      </p>
      <h5 className='mb-2 text-3xl font-bold tracking-tight text-green-700  dark:text-white'>
        {RupiahFormat.format(count)}
      </h5>
      <span className='text-lg text-slate-500 font-semibold'>{date}</span>
    </div>
  )
}

export default Cards
