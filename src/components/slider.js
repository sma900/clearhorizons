import React, { useState, useEffect } from "react";
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const Slider = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for reverse

  // Function to update the index
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1 && direction === 1) {
        setDirection(-1); // Reverse direction when reaching the last slide
        return prevIndex - 1;
      } else if (prevIndex === 0 && direction === -1) {
        setDirection(1); // Forward direction when reaching the first slide
        return prevIndex + 1;
      } else {
        return prevIndex + direction; // Move in the current direction
      }
    });
  };

  // Automatically change the slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [direction]); // Re-run when direction changes

  return (
    <div className="w-screen h-screen md:h-60vh lg:h-50vh overflow-hidden bg-black">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-screen h-screen flex justify-center items-center flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
