import Head from 'next/head';
import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import Wallet from '../components/Wallet';

export default function Home() {
  return (
    <div className="bg-bg1 font-saira">
      <Head>
        <title>NFT Landing page</title>
        <meta name="description" content="NFT Landing page" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="lg:flex">
      <NavbarMobile />
      <NavbarDesktop />
      <div className="">
        <Wallet />
      </div>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
