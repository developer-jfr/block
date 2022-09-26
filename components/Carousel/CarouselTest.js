import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import classes from "./Carousel.module.css";

const carouselImages = [
  "/assets/images/carousel-images/art-oil-dl4.jpg",
  "/assets/images/carousel-images/car.jpg",
  "/assets/images/carousel-images/football-oil-dl1.jpg",
  "/assets/images/carousel-images/gold-oil-dl4.jpg",
  "/assets/images/carousel-images/house.jpg",
  "/assets/images/carousel-images/land.jpg",
  "/assets/images/carousel-images/ticket-oil-dl1.jpg",
];

const leftArrowImg = "/assets/images/svg/leftArrow.svg";

export default function Carousel({ onSlideChange }) {
  const [autoPlay, setAutoPlay] = useState(true);

  const clickHandler = () => {
    setAutoPlay((prevValue) => !prevValue);
  };

  return (
    <div className={classes.carousel}>
      <Slider>
        {carouselImages.map((img, index) => {
          return (
            <Slide key={index} index={index}>
              <Image
                src={img}
                width="570"
                height="400"
                alt={`Carousel ${index} image`}
              />
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack className={classes.btnBack} onClick={clickHandler}>
        <Image
          src={leftArrowImg}
          width="40"
          height="40"
          alt="Carousel previous button"
        />
      </ButtonBack>
      <ButtonNext className={classes.btnNext} onClick={clickHandler}>
        <Image
          src={leftArrowImg}
          width="40"
          height="40"
          alt="Carousel next button"
        />
      </ButtonNext>
      <div className={classes.circles}>
        {carouselImages.map((_, index) => {
          return (
            <Dot
              key={index}
              slide={index}
              className={classes.circle}
              onClick={clickHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
