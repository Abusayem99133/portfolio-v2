import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "./data/config";
import CustomTitle from "./CustomTitle";

export default function MyWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <>
      <CustomTitle className="mt-44" title={"My Work"} />

      <div className="flex flex-col items-center mt-44">
        <div className="relative w-full max-w-2xl p-6 bg-gray-800 text-white rounded-lg shadow-lg">
          {/* Swiper.js for Image Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full"
          >
            {projects[currentIndex]?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Project ${currentIndex + 1} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Project Details */}
          <h2 className="mt-4 text-xl font-semibold">
            {projects[currentIndex]?.title}
          </h2>
          <p className="text-sm mt-2">{projects[currentIndex]?.description}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
