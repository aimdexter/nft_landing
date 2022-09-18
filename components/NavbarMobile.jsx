import Image from 'next/image';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInbox,
  AiOutlineMenu,
  AiOutlineWallet,
} from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiAuctionLine, RiBitCoinFill } from 'react-icons/ri';
import { TbCurrencyDogecoin, TbCurrencyEthereum } from 'react-icons/tb';

const NavbarMobile = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="fixed w-screen bg-bg1 top-0 z-50 lg:hidden flex items-center justify-between px-4 transition duration-500">
        <div className="z-50 flex justify-between w-screen py-2">
          <div className="z-50 ">
            <Image src="/images/logo.png" alt="Nft logo" width="53px" height="53px" />
          </div>
          <button className="z-10">
            {showNav ? (
              <IconContext.Provider value={{ className: 'text-2xl text-white' }}>
                <AiOutlineClose onClick={() => setShowNav(!showNav)} />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ className: 'text-2xl text-white' }}>
                <AiOutlineMenu onClick={() => setShowNav(!showNav)} />
              </IconContext.Provider>
            )}
          </button>
        </div>

        <div
          onClick={() => setShowNav(!showNav)}
          className={`${showNav ? 'left-0 z-10' : 'transition-left -left-full'} 
        fixed top-0 left-0 flex h-[-webkit-fill-available] flex-col items-center justify-center gap-5 pt-20 bg-bg1 w-full text-menu 
        duration-500 px-10`}
        >
          <div className="border-b-[1px] w-full items-start flex flex-col gap-5 h-fit border-line pb-5">
            <div className="flex px-5 py-2 rounded-xl items-center gap-3 bg-gradient-to-bl from-[#EB001B] to-[#0042FF]">
              <AiOutlineHome />
              <div href="/#home" className="">
                Dahboard
              </div>
            </div>
            <div className="flex w-40 px-5 items-center gap-3">
              <RiAuctionLine />
              <div href="/#home" className="">
                Auctions
              </div>
            </div>
            <div className="flex w-40 px-5 items-center gap-3">
              <AiOutlineInbox />
              <div href="/#home" className="">
                inbox
              </div>
            </div>
            <div className="flex w-40 px-5 items-center gap-3">
              <MdFavoriteBorder />
              <div href="/#home" className="">
                GrFavorite
              </div>
            </div>
          </div>
          <div className="border-b-[1px] w-full items-start h-fit flex flex-col gap-5 border-line pb-5">
            <div className="flex w-40 px-5 items-center gap-3">
              <AiOutlineWallet />
              <div href="/#home" className="">
                Wallet
              </div>
            </div>
            <div className="flex w-40 px-5 items-center gap-3">
              <RiBitCoinFill />
              <div href="/#home" className="">
                BitCoin
              </div>
            </div>
            <div className="flex w-40 px-5 items-center gap-3">
              <TbCurrencyEthereum />
              <div href="/#home" className="">
                Ethereum
              </div>
            </div>
            <div className="flex w-40 px-5 items-center gap-3">
              <TbCurrencyDogecoin />
              <div href="/#home" className="">
                Dogecoin
              </div>
            </div>
          </div>
          <div className=" w-full items-start h-fit flex flex-col gap-5 pb-5">
            <div className="flex w-40 px-5 items-center gap-3">
              <FiSettings />
              <div href="/#home" className="">
                Settings
              </div>
            </div>
            <div className="flex pl-5 items-center gap-5">
              <FiHelpCircle />
              <div href="/#home" className="">
                Helps & FAQ
              </div>
            </div>
            <div className="flex px-5 items-center gap-3">
              <CgDarkMode />
              <div href="/#home" className="">
                Dark mode
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMobile;
