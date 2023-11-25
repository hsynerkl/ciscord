import FifthSectionImg from "@/app/assets/images/section5.svg";
import TextImg from "@/app/assets/images/textSvg.svg";

import Image from "next/image";

const FifthSection = () => {
  return (
    <section className="bg-[#f6f6f6] py-24">
      <div className="container flex items-center justify-center flex-col">
        <div className="flex items-center flex-col justify-center">
          <p className="max-w-5xl text-center text-5xl text-[#23272a] font-extrabold leading-[1.100]">
            HER ZAMAN YAKIN OLMAK IÇIN GÜVENILIR TEKNOLOJI
          </p>
          <p className="max-w-5xl text-center mt-6 text-lg text-[#23272a] mb-4 leading-[1.625] font-thin">
            Düşük gecikmeli ses ve görüntü tıpkı aynı odadaymışsınız gibi
            hissettiriyor. Birbirinize videodan el sallayın, oyun yayını yapan
            arkadaşlarınızı izleyin veya ekran paylaşarak hep beraber çizim
            yapın.
          </p>
          <Image src={FifthSectionImg} alt="left" />
        </div>
      </div>
      <div className="mt-20 mb-10 w-fit mx-auto relative">
        <p className="text-center text-3xl font-semibold">
          Yolculuğuna başlamaya hazır mısın?
        </p>
        <Image
          src={TextImg}
          alt="text"
          className="absolute -left-4 -top-7 right-0"
        />
      </div>

      <div className="bg-[#5865f2] mx-auto text-xl flex cursor-pointer hover:shadow-xl items-center justify-center text-white font-medium transition-all duration-150 leading-[24px] rounded-[40px] h-[56px] w-[251px]">
        <a href="welcome" className="mb-[1px]">
          Windows için indir
        </a>
      </div>
    </section>
  );
};

export default FifthSection;
