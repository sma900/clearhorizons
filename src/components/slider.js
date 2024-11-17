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
    <div style={styles.sliderContainer}>
      <div
        style={{
          ...styles.slider,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={image} alt={`Slide ${index}`} style={styles.image} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    width: "100vw", // Full width of the viewport
    height: "50vh", // Full height of the viewport
    overflow: "hidden",
    margin: "auto",
    position: "relative",
    backgroundColor: "#000", // Optional: Add a background color to contrast images
  },
  slider: {
    display: "flex",
    transition: "transform 1s ease-in-out", // Smooth sliding effect
  },
  imageContainer: {
    width: "100vw", // Full viewport width
    height: "100vh", // Full viewport height
    display: "flex",
    justifyContent: "center", // Center the image horizontally
    alignItems: "center", // Center the image vertically
    flexShrink: 0,
  },
  image: {
    width: "100%", // Make the image span the full width of the container
    height: "100%", // Make the image span the full height of the container
    objectFit: "cover", // Ensure the image covers the entire container without distortion
  },
  // Responsive styling using media queries
  '@media screen and (max-width: 768px)': {
    sliderContainer: {
      height: "60vh", // For tablets, adjust height to 60% of the viewport
    },
    image: {
      objectFit: "cover", // Ensure images still cover the container
    },
  },
  '@media screen and (max-width: 480px)': {
    sliderContainer: {
      height: "50vh", // For smaller phones, adjust height further
    },
    image: {
      objectFit: "cover", // Ensure images still cover the container
    },
  },
};

export default Slider;
