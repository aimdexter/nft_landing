import { IconContext } from 'react-icons';
import { RiBitCoinFill } from 'react-icons/ri';
import { SiTesla } from 'react-icons/si';
import { TbCurrencyEthereum } from 'react-icons/tb';

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      icon: <RiBitCoinFill />,
      price: '0.15 BTC',
      usd: '$16.533.10',
      fees: '- $60',
      color: 'text-gold',
    },
    {
      id: 2,
      icon: <TbCurrencyEthereum />,
      price: '0.33 BTC',
      usd: '$33.511.10',
      fees: '- $1260',
      color: 'text-white',
    },
    {
      id: 3,
      icon: <SiTesla />,
      price: '0,55 BTC',
      usd: '$21.533.10',
      fees: '- $2360',
      color: 'text-white',
    },
    {
      id: 4,
      icon: <RiBitCoinFill />,
      price: '0.15 BTC',
      usd: '$16.533.10',
      fees: '- $60',
      color: 'text-gold',
    },
  ];
  return (
    <div className="text-white font-semibold px-4 py-8 text-3xl flex flex-col gap-5">
      <h1 className="">Recent Transactions</h1>
      <div className="font-normal text-base bg-gradient-to-bl from-[#EB001B] to-[#0042FF] rounded-xl p-[2px]">
        <div className="flex flex-col justify-between gap-5 bg-bg1 rounded-xl p-2 ">
          {transactions.map(({ id, icon, price, usd, fees, color }) => {
            return (
              <div
                key={id}
                className="flex justify-between w-full last:border-b-0 border-b-2 border-line items-center"
              >
                <div className="flex items-center py-4 gap-2">
                  <IconContext.Provider value={{ size: '40px' }}>
                    <div className={`bg-iconbg rounded-full p-1 ` + color}>{icon}</div>
                  </IconContext.Provider>
                  <div className="">
                    <h1 className="">{price}</h1>
                    <p className="text-xs text-gray1">{usd}</p>
                  </div>
                </div>
                <div className="">{fees}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
