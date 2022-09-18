import Head from 'next/head';
import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';

export default function Home() {
  return (
    <div className="bg-bg1 h-screen">
      <Head>
        <title>NFT Landing page</title>
        <meta name="description" content="NFT Landing page" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="h-screen">
      <NavbarMobile />
      <NavbarDesktop />
      </main>
      <div className="h-screen bg-red1"></div>
      <footer className="">
      </footer>
    </div>
  )
}
