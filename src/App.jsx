import EducationAndExperience from "./Components/EducationAndExperience";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import NumbersSection from "./Components/NumbersSection";
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
    </>
  );
}

export default App;
