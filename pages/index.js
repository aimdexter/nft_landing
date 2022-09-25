import Head from 'next/head';
import CardSlider from '../components/cards/CardSlider';
import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import RecentTransactions from '../components/transactions/RecentTransactions';
import Wallet from '../components/wallet/Wallet';

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
      <div className="m-2 border-[1px] border-line">
        <Wallet />
        <RecentTransactions />
        <CardSlider />
      </div>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
