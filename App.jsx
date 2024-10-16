import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tabs/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "Self-care is essential for attaining optimal fitness and overall well-being. Prioritizing regular exercise, balanced nutrition, and dedicated self-care practices significantly enhances both physical and mental health. It is crucial to cultivate a balanced lifestyle that supports your fitness journey. By embracing healthy habits and committing to your well-being, you are not only investing in your health but also laying the foundation for a successful wellness journey. Remember, your path to wellness begins with you.",
  link: "#",
};
const Banner2Data = {
  image: Img2,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "Taking care of yourself is crucial for maintaining both physical and mental well-being. It involves addressing your needs and ensuring that you are in a positive state, both physically and emotionally. Neglecting self-care can lead to burnout and various health issues, so it’s important to prioritize it in your daily routine. This includes engaging in regular exercise, nourishing your body with a balanced diet, and allowing time for rest and relaxation. By recognizing the significance of self-care, you empower yourself to lead a healthier, more fulfilling life.",
  link: "#",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default App;
