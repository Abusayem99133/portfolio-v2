import { useEffect, useState } from "react";
import { projects } from "./data/config";
import CustomTitle from "./CustomTitle";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    console.log("Current Index Updated:", currentIndex);
  }, [currentIndex]);

  return (
    <>
      <header className="relative " id="work">
        <CustomTitle className="mt-44" title={"My Work"} />
      </header>
      <article className="relative flex h-full justify-center items-center w-full p-4 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] left-10 top-0 hidden md:block"></header>
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] right-10 bottom-0 hidden md:block"></header>

        <nav>
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 hover:scale-105"
          >
            <img
              src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-left.png"
              alt="circled-chevron-left"
              height={100}
              width={100}
            />
          </button>
        </nav>

        <article className="relative w-full h-screen flex items-center justify-center">
          <AnimatePresence mode="wait">
            {projects.length > 0 && (
              <motion.article
                key={currentIndex} // **Fixed Key Issue**
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -50 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut", // ✅ Corrected Ease
                }}
                className="absolute w-[80%] h-full p-6 border border-primary bg-[#ffffff29] rounded-3xl text-white shadow-lg"
              >
                <img
                  src={projects[currentIndex]?.imageUrl}
                  alt={projects[currentIndex]?.title}
                  className="w-full h-[500px] object-cover rounded-t-lg mb-4"
                />
                <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                  {projects[currentIndex]?.title}
                </h2>
                <p className="text-md mt-2">
                  {projects[currentIndex]?.description}
                </p>
              </motion.article>
            )}
          </AnimatePresence>
        </article>

        <nav>
          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 hover:scale-105"
          >
            <img
              src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-right.png"
              alt="circled-chevron-right"
              height={100}
              width={100}
            />
          </button>
        </nav>
      </article>
    </>
  );
}
