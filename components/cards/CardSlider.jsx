import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 426px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const nfts = [
    {
      id: '1',
      title: 'Ready Players',
      image: '/images/nft1.png',
      avatar: '/images/debble.png',
      name: '@Debble111',
      last_bid: '1.57 ETH',
    },
    {
      id: '2',
      title: "Drago's Den",
      image: '/images/nft2.png',
      avatar: '/images/alic.png',
      name: '@alic_cila',
      last_bid: '1.57 ETH',
    },
    {
      id: '3',
      title: 'Crippled World',
      image: '/images/nft3.png',
      avatar: '/images/jenzi.png',
      name: '@Jenzi.oli',
      last_bid: '1.18 ETH',
    },
  ];
  return (
    <>
      <div className="text-white relative font-semibold px-4 text-3xl flex flex-col gap-5 ">
        <h1 className="">Featured NFTs</h1>
        <div className="font-normal  text-base bg-gradient-to-bl from-[#EB001B] to-[#0042FF] rounded-xl p-[2px]">
          <div className="bg-bg1 rounded-xl p-8 ">
            <div className="">
              <div ref={sliderRef} className="keen-slider rounded-xl">
                {nfts.map(({ id, title, image, avatar, name, last_bid }) => {
                  return (
                    <div
                      key={id}
                      className="keen-slider__slide flex flex-col items-center justify-center"
                    >
                      <div className="flex flex-col gap-5">
                        <Image src={image} alt="Nft1" width={300} height={300} />
                        <div className="flex items-center justify-between text-lg">
                          <span className="">{title}</span>
                          <AiOutlineHeart />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray1">
                          <Image src={avatar} alt="avatar" width={23} height={23} />
                          {name}
                        </div>
                        <div className="flex justify-between text-sm text-gray1">
                          <span className="">Last Bid</span> {last_bid}
                        </div>
                        <button className="bg-gradient-to-r  from-[#0042FF] to-[#EB001B] p-2 rounded-xl">
                          Place a bid
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                    disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSlider;

function Arrow(props) {
  const disabeld = props.disabled ? 'fill-gray1 bg-transparent' : 'fill-white bg-line2';
  return (
    <svg
      onClick={props.onClick}
      className={`w-[30px] border-2 p-2 border-gray1 rounded-lg absolute cursor-pointer translate-y-[-50%] top-[3%] ${
        props.left ? 'right-14' : 'right-5'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}
