import { useState } from "react";
import BackToTop from "./Components/BackToTop";
import ContactUs from "./Components/ContactUs";
import EducationAndExperience from "./Components/EducationAndExperience";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import NumbersSection from "./Components/NumbersSection";
import ProjectSection from "./Components/ProjectSection";
import ServicesSection from "./Components/ServicesSection";
import SkillsSection from "./Components/SkillsSection";
import ThreeBackground from "./Components/ThreeBackground";
import MyWork from "./Components/MyWork";
// import LoadingSpinner from "./Components/LoadingSpinner";

function App() {
  // const [loading, setLoading] = useState(true);
  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
    //   <ThreeBackground />
    //   {loading ? (
    //     <LoadingSpinner onComplete={() => setLoading(false)} />
    //   ) : (
    <>
      <ThreeBackground />
      <NavBar />
      <HeroSection />
      <NumbersSection />
      <ServicesSection />

      <SkillsSection />
      <EducationAndExperience />
      {/* <ProjectSection /> */}
      <MyWork />
      <ContactUs />
      <Footer />
      <BackToTop />
    </>
    //   )}
    // </div>
  );
}

export default App;
