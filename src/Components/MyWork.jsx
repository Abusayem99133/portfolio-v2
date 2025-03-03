import { useState } from "react";
import { projects } from "./data/config";
import CustomTitle from "./CustomTitle";

export default function MyWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (!projects || projects.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    if (!projects || projects.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (!projects || projects.length === 0) {
    return (
      <p className="text-center text-white text-lg">Loading projects...</p>
    );
  }

  return (
    <>
      <header className="relative" id="work">
        <CustomTitle className="mt-44" title={"My Work"} />
      </header>

      <article className="relative flex flex-col items-center justify-center w-full p-4 mt-32">
        {/* Background Gradient Effects */}
        <div className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] left-10 top-0 hidden md:block"></div>
        <div className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] right-10 bottom-0 hidden md:block"></div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-20 z-10 hover:scale-105"
        >
          <img
            src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-left.png"
            alt="circled-chevron-left"
            height={100}
            width={100}
          />
        </button>

        {/* Project Display */}
        <div className="relative w-full max-w-3xl p-6 bg-[#ffffff29] border border-primary rounded-3xl text-white shadow-lg flex items-center gap-4">
          <div className="flex-1 text-center">
            <img
              src={projects[currentIndex]?.imageUrl}
              alt={projects[currentIndex]?.title}
              className="w-full h-[400px] object-cover rounded-t-lg mb-4"
            />
            <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
              {projects[currentIndex]?.title}
            </h2>
            <p className="text-md mt-2">
              {projects[currentIndex]?.description}
            </p>

            {/* Buttons Section */}
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {/* Visit Project Button */}
              <a
                href={projects[currentIndex]?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-semibold text-white bg-primary bg-opacity-45 rounded-lg hover:bg-opacity-80 transition hover:cursor-pointer"
              >
                Visit Project
              </a>

              {/* Client GitHub Repo */}
              <a
                href={projects[currentIndex]?.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-semibold text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition hover:cursor-pointer"
              >
                Client Repo
              </a>

              {/* Server GitHub Repo */}
              <a
                href={projects[currentIndex]?.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-semibold text-white bg-primary bg-opacity-45 rounded-lg hover:bg-opacity-80 transition hover:cursor-pointer"
              >
                Server Repo
              </a>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-20 z-10 hover:scale-105"
        >
          <img
            src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-right.png"
            alt="circled-chevron-right"
            height={100}
            width={100}
          />
        </button>
      </article>
    </>
  );
}
