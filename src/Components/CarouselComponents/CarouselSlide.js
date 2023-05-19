import "./Slides.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

function CarouselSlide() {
  return (
    <div className="carousel-div">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={48}
        totalSlides={4}
        infiniteLoop={true}
      >
        <Slider>
          <Slide index={0}>
            <Slide1 />{" "}
          </Slide>
          <Slide index={1}>
            <Slide2 />{" "}
          </Slide>
          <Slide index={2}>
            <Slide3 />
          </Slide>
          <Slide index={3}>
            <Slide4 />
          </Slide>
        </Slider>
        <div className="carousel-buttons">
          <ButtonBack id="arrow-parent1">
            <FaAngleLeft id="arrow"   />{" "}
          </ButtonBack>
          <ButtonNext id="arrow-parent2">
            {" "}
            <FaAngleRight id="arrow"  />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default CarouselSlide;
