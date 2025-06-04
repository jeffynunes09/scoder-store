import { useEffect, useState } from "react";
import { fetchUrlImgSlider } from "../../utils/functions";
import "./index.css";

export const ProductSlider = () => {
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imgs = fetchUrlImgSlider();
    setSliderImages(imgs);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages]);

  if (sliderImages.length === 0) return null;

  return (
    <div className="slider-container">
      {sliderImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`slide-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};
