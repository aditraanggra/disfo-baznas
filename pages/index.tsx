import Head from 'next/head'
import Signage from './Signage'

export default function Home() {
  return (
    <>
      <Head>
        <title>DISFO - BAZNAS Kabupaten Cianjur</title>
        <meta
          name='description'
          content='Digital Information - BAZNAS Kabupaten Cianjur'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Signage />
    </>
  )
}
