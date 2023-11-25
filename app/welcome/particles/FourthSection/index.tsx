import Image from "next/image";
import Section4Img from "@/app/assets/images/section4.svg";

const FourthSection = () => {
  return (
    <section className="container grid grid-cols-2 py-24">
      <Image src={Section4Img} alt="left" className="my-auto" />
      <div className="flex items-center flex-col justify-center">
        <p className="max-w-sm text-5xl text-[#23272a] font-extrabold leading-[1.100]">
          Birkaç kişiden hayran kitlelerine
        </p>
        <p className="max-w-sm mt-6 text-lg text-[#23272a] leading-[1.625] font-thin">
          Moderasyon araçları ve özelleştirilebilir üye erişimleriyle istediğin
          bir topluluk kur. Üyelere çeşitli yetkiler verebilir, özel kanallar
          kurabilir ve daha fazlasını yapabilirsin.
        </p>
      </div>
    </section>
  );
};

export default FourthSection;
