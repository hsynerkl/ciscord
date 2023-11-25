import Image from "next/image";
import Section2Img from "@/app/assets/images/section2.svg";

const SecondSection = () => {
  return (
    <section className="container grid grid-cols-2 py-24">
      <Image src={Section2Img} alt="left" className="my-auto" />
      <div className="flex items-center flex-col justify-center">
        <p className="max-w-sm text-5xl text-[#23272a] font-extrabold leading-[1.100]">
          Sadece davet ile girilebilen, ait olduğun bir ortam oluştur
        </p>
        <p className="max-w-sm mt-6 text-lg text-[#23272a] leading-[1.625] font-thin">
          Discord sunucuları konulara göre kanallara ayrılır ve bu kanallarda
          grup konuşmasını işgal etmeden diğerleriyle birlikte çalışabilir,
          paylaşabilir veya yalnızca gününden bahsedebilirsin.
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
