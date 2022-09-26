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

const leftArrowImg = "/assets/images/svg/leftArrow.svg";

export default function Carousel({ carouselImages, onSlideChange }) {
  const clickHandler = () => {
    onSlideChange(false);
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
