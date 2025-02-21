import ContactUs from "./Components/ContactUs";
import EducationAndExperience from "./Components/EducationAndExperience";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import NumbersSection from "./Components/NumbersSection";
import ProjectSection from "./Components/ProjectSection";
import ServicesSection from "./Components/ServicesSection";
import SkillsSection from "./Components/SkillsSection";
import ThreeBackground from "./Components/ThreeBackground";
function App() {
  return (
    <>
      <ThreeBackground />
      <NavBar />
      <HeroSection />
      <NumbersSection />
      <ServicesSection />

      <SkillsSection />
      <EducationAndExperience />
      <ProjectSection />
      <ContactUs />
    </>
  );
}

export default App;
