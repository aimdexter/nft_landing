import { AiFillSignal } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { SiEthereum } from 'react-icons/si';
import ChartCrypto from './Charts';

const Wallet = () => {
  return (
    <div className="text-white font-semibold px-4 text-3xl flex flex-col gap-5">
      <h1 className="">My Wallet</h1>
      <div className="font-normal text-base bg-gradient-to-bl from-[#EB001B] to-[#0042FF] rounded-xl p-[2px]">
        <div className="text-center flex flex-col gap-5 bg-bg1 rounded-xl p-2">
          <h1 className="text-gray1">Your balance</h1>
          <div className="font-semibold">
            ETH <span className="text-4xl">21.533.10</span>
          </div>
          <div className="text-gray1 flex items-center justify-around">
            <div className="flex items-center gap-5">
              <div className="text-4xl bg-white rounded-full text-black1">
                <SiEthereum />
              </div>
              <div className="">
                Ethereum <span className="text-white">ETH</span>
              </div>
            </div>
            <div className="text-white text-xl">
              <IoIosArrowDown />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-gray1 ">
              <div className="bg-green-900 text-3xl p-2 rounded-full text-green1 font-medium bg-opacity-75">
                <AiFillSignal />
              </div>
              Earning
            </div>
            <div className="flex items-center gap-2 text-gray1 ">
              <div className="bg-red-900 text-3xl p-2 rounded-full text-red1 bg-opacity-75 font-medium">
                <AiFillSignal />
              </div>
              Spendings
            </div>
          </div>
          <div className="flex justify-around font-bold text-2xl">
            <div className="text-green1">
              7.048 <span className="text-base text-white">ETH</span>
            </div>
            <div className="text-red1">
              2.013 <span className="text-base text-white">ETH</span>
            </div>
          </div>
          <div className="graphs">
            <ChartCrypto />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wallet;
