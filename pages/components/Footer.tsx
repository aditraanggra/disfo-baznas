import Image from 'next/image'
import FooterLogo from '../../public/footer-hut.png'

const Footer = () => {
  return (
    <>
      <div className='block relative'>
        <Image
          src={FooterLogo}
          alt='footer-logo'
          className='footer-logo right-0 z-10 '
        />
      </div>
      <div className='w-full h-auto flex justify-center items-center bottom-0 bg-green-700'>
        <div className='py-6 animate-marquee whitespace-nowrap'>
          <span className='text-3xl italic text-orange-300 font-bold  mx-4'>
            Rekening Zakat :
          </span>
          <span className='text-3xl italic text-white font-bold  mx-4'>
            BJB - 0140010006393
          </span>
          <span className='text-3xl italic text-white font-bold mx-4'>
            Muamalat - 1410033475
          </span>
          <span className='text-3xl italic text-white font-bold mx-4'>
            BSI - 92553491000
          </span>
          <span className='text-3xl italic text-white font-bold mx-4'>
            BSI - 8318318318
          </span>
          <span className='text-3xl italic text-orange-300 font-bold mx-4'>
            Rekening Infak :
          </span>
          <span className='text-3xl italic text-white font-bold mx-4'>
            BJB Syariah - 5030102000111
          </span>
          <span className='text-3xl italic text-white font-bold mx-4'>
            Muamalat - 1410033478
          </span>
          <span className='text-3xl italic text-white font-bold mx-4'>
            BSI - 7154944723
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
