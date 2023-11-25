import Navbar from "./particles/Navbar";
import Footer from "./particles/Footer";
import FirstSection from "./particles/FirstSection";
import SecondSection from "./particles/SecondSection";
import ThirdSection from "./particles/ThirdSection";
import FourthSection from "./particles/FourthSection";
import FifthSection from "./particles/FifthSection";

const WelcomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#404EED]">
        <div className="container relative">
          <div>
            <Navbar />
          </div>
          <FirstSection />
        </div>
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <div className="bg-[#23272a] py-16">
        <Footer />
      </div>
    </div>
  );
};

export default WelcomePage;
