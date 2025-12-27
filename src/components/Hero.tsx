"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  FaUniversity,
  FaGraduationCap,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";

import image1 from "@/assets/images/carouselImage1.jpg";
import image2 from "@/assets/images/carouselImage2.jpg";
import image3 from "@/assets/images/carouselImage3.jpg";
import { hero } from "@/data/home";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: image1,
      title: hero.slides[0].title,
      description: hero.slides[0].description,
    },
    {
      src: image2,
      title: hero.slides[1].title,
      description: hero.slides[1].description,
    },
    {
      src: image3,
      title: hero.slides[2].title,
      description: hero.slides[2].description,
    },
  ];

  const autoSlide = true;
  const autoSlideInterval = 5000;

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getIcon = (iconName: String) => {
    switch (iconName) {
      case "FaUniversity":
        return <FaUniversity />;
      case "FaGraduationCap":
        return <FaGraduationCap />;
      case "FaBook":
        return <FaBook />;
      case "FaCalendarAlt":
        return <FaCalendarAlt />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full md:h-[90vh] h-[40vh] mx-auto overflow-hidden">
      <div className="relative h-full flex">
        {images.map(({ src, title, description }, index) => {
          const offset = index - currentIndex;

          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(${offset * 100}%)` }}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover object-top"
              />
              <div className="absolute bg-neutral/70 inset-0 flex flex-col justify-center items-center text-center text-neutral-content px-4">
                <h2 className="text-3xl md:text-6xl font-bold drop-shadow-lg">
                  {title}
                </h2>
                <p className="mt-8 md:text-lg drop-shadow-md max-w-xl">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="absolute top-1/2 left-6 md:left-12 transform -translate-y-1/2 bg-neutral bg-opacity-50 hover:bg-opacity-80 text-neutral-content p-2 rounded-full z-10"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 bg-neutral bg-opacity-50 hover:bg-opacity-80 text-neutral-content p-2 rounded-full z-10"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FiChevronRight size={24} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? "bg-base-100" : "bg-base-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;