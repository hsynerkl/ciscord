import Navbar from "./particles/Navbar";
import FirstSection from "./particles/FirstSection";
import SecondSection from "./particles/SecondSection";

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
    </div>
  );
};

export default WelcomePage;
