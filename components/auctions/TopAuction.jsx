import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbCurrencyEthereum } from 'react-icons/tb';

const TopAuction = () => {
  return (
    <div className="text-white hidden font-semibold px-4 pt-8 text-3xl lg:flex flex-col gap-5 w-fit">
      <h1 className="">Top Auction</h1>
      <div className="font-normal text-base rounded-xl bg-auction p-[2px]">
        <div className="flex items-center justify-between rounded-xl p-2">
          <div className="">
            <Image src="/images/auctionnft.png" alt="Nft1" width={388} height={353} />
          </div>
          <div className="flex flex-col w-1/2 gap-10">
            <div className="flex text-red1 font-semibold text-3xl items-center justify-between">
              <h1 className="text-white">Magic Bullets</h1>
              <AiOutlineHeart />
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/debble.png" alt="Nft1" width={54} height={54} />
              <div className="font-semibold">
                <h1 className="text-sm">Debbie Reese</h1>
                <h2 className="text-gray1 text-xs">@Debbie111</h2>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1">
                <h1 className="text-xs text-gray1 font-semibold">Price per NFT</h1>
                <div className="flex items-center gap-2 text-xl">
                  <TbCurrencyEthereum />
                  <h1 className="">80 PLAYER</h1>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-xs text-gray1 font-semibold">Starts in</h1>
                <h1 className="text-xl font-semibold">02h 32m 44s</h1>
              </div>
            </div>
            <div className="flex justify-around">
              <button className="bg-white text-black1 font-semibold py-2 px-4 text-base rounded-lg">
                View Rewards
              </button>
              <button className="font-semibold py-2 px-4 text-base rounded-lg border-[1px] border-white">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAuction;
