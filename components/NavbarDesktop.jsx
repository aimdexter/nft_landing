import Image from 'next/image';
import { AiOutlineHome, AiOutlineInbox, AiOutlineWallet } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiAuctionLine, RiBitCoinFill } from 'react-icons/ri';
import { TbCurrencyDogecoin, TbCurrencyEthereum } from 'react-icons/tb';

const NavbarDesktop = () => {
  return (
    <>
      <nav className="hidden fixed top-0 left-0 h-full w-fit border-r-[1px] border-line2 lg:flex flex-col bg-bg1">
        <div className="z-50 w-full pt-2 px-2 ">
          <Image src="/images/logo.png" alt="Nft logo" width="53px" height="53px" />
        </div>

        <div className="flex flex-col px-2 text-menu duration-500 h-full">
          <div className="border-b-[1px] items-start flex flex-col border-line flex-1 justify-around">
            <div className="flex px-5 py-2 rounded-xl items-center gap-3 bg-gradient-to-bl from-[#EB001B] to-[#0042FF]">
              <AiOutlineHome />
              <div href="/#home" className="">
                Dahboard
              </div>
            </div>
            <div className="flex items-center gap-3 px-4">
              <RiAuctionLine />
              <div href="/#home" className="">
                Auctions
              </div>
            </div>
            <div className="flex items-center gap-3 px-4">
              <AiOutlineInbox />
              <div href="/#home" className="">
                inbox
              </div>
            </div>
            <div className="flex items-center gap-3 px-4">
              <MdFavoriteBorder />
              <div href="/#home" className="">
                GrFavorite
              </div>
            </div>
          </div>
          <div className="border-b-[1px] items-start flex flex-col border-line px-4 flex-1 justify-around">
            <div className="flex  items-center gap-3">
              <AiOutlineWallet />
              <div href="/#home" className="">
                Wallet
              </div>
            </div>
            <div className="flex  items-center gap-3">
              <RiBitCoinFill />
              <div href="/#home" className="">
                BitCoin
              </div>
            </div>
            <div className="flex  items-center gap-3">
              <TbCurrencyEthereum />
              <div href="/#home" className="">
                Ethereum
              </div>
            </div>
            <div className="flex  items-center gap-3">
              <TbCurrencyDogecoin />
              <div href="/#home" className="">
                Dogecoin
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 flex-1 justify-around">
            <div className="flex  items-center gap-3">
              <FiSettings />
              <div href="/#home" className="">
                Settings
              </div>
            </div>
            <div className="flex  items-center gap-3">
              <FiHelpCircle />
              <div href="/#home" className="">
                Help & FAQ
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CgDarkMode />
              <div href="/#home" className="">
                Dark mode
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-red-500 h-screen w-[162px] hidden lg:flex"></div>
    </>
  );
};

export default NavbarDesktop;
