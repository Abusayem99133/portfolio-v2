import { useState } from "react";
import { projects } from "./data/config";
import CustomTitle from "./CustomTitle";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects?.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects?.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <header className="relative " id="work">
        <CustomTitle className="mt-44" title={"My Work"} />
      </header>
      <article className="relative flex h-full justify-center items-center w-full p-4 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] left-10 top-0 hidden md:block"></header>
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] right-10 bottom-0 hidden md:block"></header>

        <nav>
          <button className="absolute left-4 z-10 hover:scale-105 ">
            <img
              src="http://img.icon/sf-black/100/FFC107/circled-chevron-left.png"
              alt="circled-chevron-left"
            />
          </button>
        </nav>
      </article>
    </>
  );
};
const ProjectSection = () => {
  return (
    <div>
      <h1>This is project</h1>
    </div>
  );
};

export default ProjectSection;
