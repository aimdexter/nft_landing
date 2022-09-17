import Image from 'next/image';
import { AiOutlineHome, AiOutlineInbox, AiOutlineWallet } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiAuctionLine, RiBitCoinFill } from 'react-icons/ri';
import { TbCurrencyDogecoin, TbCurrencyEthereum } from 'react-icons/tb';

const NavbarDesktop = () => {
  return (
    <nav className="hidden fixed top-0 left-0 bg-red1 h-screen lg:flex flex-col">
      <div className="z-50 bg-white w-full">
        <Image src="/images/logo.png" alt="Nft logo" width="53px" height="53px" />
      </div>

      <div className="flex flex-col h-screen bg-bg1 w-fit text-menu duration-500 justify-center">
        <div className="border-b-[1px] items-start flex flex-col border-line ">
          <div className="flex px-5 py-2 rounded-full items-center gap-3 bg-gradient-to-bl from-[#EB001B] to-[#0042FF]">
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
        <div className="border-b-[1px] items-start flex flex-col border-line px-4">
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
        <div className=" w-full flex flex-col px-4">
          <div className="flex  items-center gap-3">
            <FiSettings />
            <div href="/#home" className="">
              Settings
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FiHelpCircle />
            <div href="/#home" className="">
              Helps & FAQ
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
  );
};

export default NavbarDesktop;
