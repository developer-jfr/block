import Carousel from "../Carousel/Carousel";

import useMediaQuery from "../../hooks/useMediaQuery";
import useCarousel from "../../hooks/useCarousel";

import classes from "./TokenizationProjects.module.css";

export default function CarouselSection({
  carouselImages,
  onSlideChange,
  setSlide,
}) {
  const isMobileScreen = useMediaQuery("(max-width: 650px)");
  const currentSlide = useCarousel();

  return (
    <div className={classes.flex}>
      <div className={classes.carouselBorderGradient}>
        <Carousel
          carouselImages={carouselImages}
          onSlideChange={onSlideChange}
        />
      </div>
      <div className={classes.carouselContent}>
        <h4>
          Recently NFTs have gained a lot of <br /> attention, because of the
          ability to store and {!isMobileScreen && <br />}sale art, online.
        </h4>
        <p>
          They&apos;re more than just JPEG images. The standardization,{" "}
          <span className={classes.green}>EIP-721</span>{" "}
          {!isMobileScreen && <br />}
          and <span className={classes.green}>EIP-1155</span> which are used to
          create, store, distribute and sale {!isMobileScreen && <br />}
          NFTs on market places such as{" "}
          <span className={classes.green}>OpenSea</span> and{" "}
          <span className={classes.green}>Rarible</span>.
        </p>
        <p className={classes.carouselHandlerParagraph}>
          Can be used to tokenization assets such as{" "}
          <span
            className={currentSlide == 0 ? classes.purple : ""}
            onClick={() => {
              setSlide(0);
            }}
          >
            Art
          </span>
          ,{" "}
          <span
            className={currentSlide == 1 ? classes.purple : ""}
            onClick={() => {
              setSlide(1);
            }}
          >
            Car
          </span>
          ,{" "}
          <span
            className={currentSlide == 2 ? classes.purple : ""}
            onClick={() => {
              setSlide(2);
            }}
          >
            Football
          </span>
          ,{" "}
          <span
            className={currentSlide == 3 ? classes.purple : ""}
            onClick={() => {
              setSlide(3);
            }}
          >
            Gold
          </span>
          , {!isMobileScreen && <br />}{" "}
          <span
            className={currentSlide == 4 ? classes.purple : ""}
            onClick={() => {
              setSlide(4);
            }}
          >
            House
          </span>
          ,{" "}
          <span
            className={currentSlide == 5 ? classes.purple : ""}
            onClick={() => {
              setSlide(5);
            }}
          >
            Land
          </span>
          ,{" "}
          <span
            className={currentSlide == 6 ? classes.purple : ""}
            onClick={() => {
              setSlide(6);
            }}
          >
            Event ticket
          </span>
          .
          {/* <br /> They can even be used to tokenization companies, people
      and legal <br /> documentation. */}
        </p>
        <p>
          This creates a future where it&apos;s possible to tokenize unique items for{" "}
          {!isMobileScreen && <br />}
          various purposes.
        </p>
      </div>
    </div>
  );
}
