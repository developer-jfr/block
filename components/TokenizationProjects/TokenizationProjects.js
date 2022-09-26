import Image from "next/image";
import React, { useEffect, useState } from "react";

import Container from "../UI/Container/Container";
import { CarouselProvider } from "pure-react-carousel";
import CarouselSection from "./CarouselSection";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./TokenizationProjects.module.css";

const firstImg = "/assets/images/svg/amico.svg";
const secondImg = "/assets/images/svg/ERC20.svg";
const thirdImg = "/assets/images/svg/DiscoverERC20.svg";
const fourthImg = "/assets/images/svg/code.svg";
const radialImg = "/assets/images/svg/radial.svg";
const circleImg = "/assets/images/svg/circles.svg";

const carouselImages = [
  "/assets/images/carousel-images/art-oil-dl4.jpg",
  "/assets/images/carousel-images/car.jpg",
  "/assets/images/carousel-images/football-oil-dl1.jpg",
  "/assets/images/carousel-images/gold-oil-dl4.jpg",
  "/assets/images/carousel-images/house.jpg",
  "/assets/images/carousel-images/land.jpg",
  "/assets/images/carousel-images/ticket-oil-dl1.jpg",
];

export default function TokenizationProjects() {
  const isMobileScreen = useMediaQuery("(max-width: 750px)");
  const [carouselIsPlaying, setCarouselIsPlaying] = useState(true);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setCarouselIsPlaying(false);
  }, [slide]);

  useEffect(() => {
    if (carouselIsPlaying == false) {
      setCarouselIsPlaying(true);
    }
  });

  return (
    <div className={classes.tokenizationProjects} id="tokenizationProjects">
      <div className={classes.radialImgDecoration}>
        {!isMobileScreen && (
          <Image src={radialImg} width="257" height="257" alt="" />
        )}
        {isMobileScreen && (
          <Image src={radialImg} width="72" height="72" alt="" />
        )}
      </div>
      <div className={classes.circleImgDecoration}>
        {!isMobileScreen && (
          <Image src={circleImg} width="455" height="455" alt="" />
        )}
        {isMobileScreen && (
          <Image src={circleImg} width="140" height="140" alt="" />
        )}
      </div>
      <Container>
        <div className={classes.flex}>
          <div className={classes.contentSide}>
            <h3>
              Truffle <span>Suite</span>
            </h3>
            {/* <p>
              Truffle suite makes it easier for Smart Contract engineers to {isMobileScreen && <br />} write, test and
              deploy {!isMobileScreen && <br />} smart contracts. One of the biggest {isMobileScreen && <br />}{" "}
              beneffits of using truffle suite, is the ease at {!isMobileScreen && <br />} which open{" "}
              {isMobileScreen && <br />} source algorithms from repositories such as Github and NPM,{" "}
              {isMobileScreen && <br />} can be {!isMobileScreen && <br />} imported to new projects.
            </p> */}
            <p className={classes.specialparagraph}>
              Truffle suite makes it easier for Smart Contract engineers to
              write, test and deploy smart contracts. One of the biggest
              benefits of using truffle suite, is the ease at which open source
              algorithms from repositories such as Github and NPM, can be
              imported to new projects.
            </p>
            <p>
              Without Truffle, handling smart contracts, <br /> would be like
              drinking water using a fork, instead of a cup.
            </p>
          </div>
          <div className={classes.imageSide}>
            <Image src={firstImg} width="500" height="371.54" alt="" />
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.contentSide}>
            <h3>
              ERC-20 <span>Contracts</span>: What {!isMobileScreen && <br />} are
              they?
            </h3>
            <p>
              ERC-20 Contracts, are a tokenization standard, for transfering
              ownership, checking <br /> balances, sending events of tokens
              which have been deployed on EVM <br />
              compatible blockchains.
            </p>
          </div>
          <div className={classes.imageSide}>
            <Image src={secondImg} width="500" height="371.54" alt="" />
          </div>
        </div>
        <div className={`${classes.flex} ${classes.smallerLine}`}>
          <div className={classes.contentSide}>
            <h3>
              Discover the {!isMobileScreen && <br />} projects making <br />{" "}
              use of <span>ERC-20</span>
            </h3>
            <p>
              With the use of an agreed-up standard, it makes it possible <br />{" "}
              to determine a tokens features and functionalities, based <br />{" "}
              on its standardization.
            </p>
          </div>
          <div className={classes.imageSide}>
            <Image src={thirdImg} width="340" height="340" alt="" />
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.contentSide}>
            <h3>
              Ready, Set, <span>Deploy</span>!
            </h3>
            <p>
              Let&apos;s write, deploy and distribute your unique Solidity{" "}
              <br /> contracts.
            </p>
          </div>
          <div className={classes.imageSide}>
            <Image src={fourthImg} width="570" height="513" alt="" />
          </div>
        </div>
        <div className={classes.carouselSection}>
          <h3>
            A World of NFTs. <br />A World of <span>tokenization</span>!
          </h3>
          <p className={classes.subtitle}>
            They&apos;re unique, and so are you. What <br /> can NFTs do for
            you?
          </p>
          <CarouselProvider
            naturalSlideWidth={570}
            naturalSlideHeight={400}
            totalSlides={carouselImages.length}
            currentSlide={slide}
            dragEnabled={false}
            touchEnabled={false}
            isPlaying={carouselIsPlaying}
          >
            <CarouselSection
              carouselImages={carouselImages}
              onSlideChange={setCarouselIsPlaying}
              setSlide={setSlide}
            />
          </CarouselProvider>
        </div>
      </Container>
    </div>
  );
}
