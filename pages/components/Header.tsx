import Image from 'next/image'
import Logo from '../../public/KABUPATEN CIANJUR.png'

const Header = () => {
  return (
    <div className='w-full flex flex-grow-0 flex-shrink justify-between items-center px-2'>
      <div className='flex flex-row justify-center items-center'>
        <Image src={Logo} alt='Logo_baznas_cianjur' height={96} />
        <h2 className='text-[2.8em] font-bold text-green-700 uppercase'>
          Informasi Digital Badan Amil Zakat Nasional Kabupaten Cianjur
        </h2>
      </div>
      <h2 className='text-lg xl:text-xl text-green-700 font-semibold'></h2>
    </div>
  )
}

export default Header
