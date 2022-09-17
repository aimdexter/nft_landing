import Head from 'next/head';
import NavbarMobile from '../components/NavbarMobile';

export default function Home() {
  return (
    <div className="bg-bg1 h-screen w-screen">
      <Head>
        <title>NFT Landing page</title>
        <meta name="description" content="NFT Landing page" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="h-screen">
      <NavbarMobile />
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
