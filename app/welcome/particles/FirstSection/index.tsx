import Image from "next/image";
import BulutSvg from "@/app/assets/images/bulut.svg";
import RightSvg from "@/app/assets/images/right.svg";
import LeftSvg from "@/app/assets/images/left.svg";

const FirstSection = () => {
  return (
    <div className="relative ">
      <div className="flex flex-col justify-center items-center pt-10 pb-32">
        <h1 className="text-6xl relative z-10 mb-10 max-w-3xl text-center custom-font font-normal text-white">
          ÖYLE BIR ORTAM HAYAL ET KI...
        </h1>
        <p className="max-w-3xl text-white/80 text-center relative z-10 text-white text-xl">
          ...bir okul kulübünün, oyun grubunun veya dünya çapında bir sanat
          topluluğunun bir üyesi olabilirsin. Sadece sen ve arkadaşlarının vakit
          geçirebileceği bir yer. Her gün konuşmayı ve daha sık takılmayı
          kolaylaştıran bir ortam.
        </p>
        <div className="flex mt-10 relative z-10 gap-7">
          <div className="bg-white text-xl flex cursor-pointer hover:shadow-xl items-center justify-center text-[#23272a] font-medium transition-all duration-150 hover:text-[#404EED] leading-[24px] rounded-[40px] h-[56px] w-[251px]">
            <a href="welcome" className="mb-[1px]">
              Windows için indir
            </a>
          </div>

          <div className="bg-[#23272a] text-xl flex hover:shadow-xl cursor-pointer items-center justify-center font-medium transition-all duration-150 text-white leading-[24px] rounded-[40px] h-[56px] w-[269px]">
            <a href="welcome" className="mb-[1px]">
              Discord&apos;u tarayıcıda aç
            </a>
          </div>
        </div>
      </div>

      <Image
        src={BulutSvg}
        className="absolute select-none z-[1] bottom-0"
        alt="bulut"
      />
      <Image
        src={RightSvg}
        className="absolute z-[1] -right-[340px] bottom-0 select-none"
        alt="right"
      />
      <Image
        src={LeftSvg}
        className="absolute z-[1] -left-[340px] bottom-0 select-none"
        alt="left"
      />
    </div>
  );
};

export default FirstSection;
