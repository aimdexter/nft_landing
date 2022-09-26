import Head from 'next/head';
import TopAuction from '../components/auctions/TopAuction';
import CardSlider from '../components/cards/CardSlider';
import NavbarDesktop from '../components/navigation/NavbarDesktop';
import NavbarMobile from '../components/navigation/NavbarMobile';
import UserMenu from '../components/navigation/UserMenu';
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
        <div className="lg:w-full">
          <UserMenu />
          <div className="lg:flex lg:justify-between lg:pl-2">
            <TopAuction />
            <div className="lg:flex-1">
              <Wallet />
            </div>
          </div>
          <div className="lg:flex lg:flex-row-reverse lg:pl-2">
            <div className="lg:flex-1">
              <RecentTransactions />
            </div>
            <div className="lg:flex-1">
              <CardSlider />
            </div>
          </div>
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
