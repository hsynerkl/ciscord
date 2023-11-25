import Image from "next/image";
import Section2Img from "@/app/assets/images/section3.svg";

const ThirdSection = () => {
  return (
    <section className="bg-[#f6f6f6]">
      <div className="container  grid grid-cols-2 py-24">
        <div className="flex items-center flex-col justify-center">
          <p className="max-w-sm text-5xl text-[#23272a] font-extrabold leading-[1.00]">
            Birlikte takılmak burada çok kolay
          </p>
          <p className="max-w-sm mt-6 text-lg text-[#23272a] leading-[1.625] font-thin">
            Uygun olduğunda bir ses kanalına gir. Sunucundaki arkadaşların seni
            görünce ayrıca aramalarına gerek kalmadan hemen konuşmaya
            gelebilirler.
          </p>
        </div>
        <Image src={Section2Img} alt="left" className="my-auto" />
      </div>
    </section>
  );
};

export default ThirdSection;
