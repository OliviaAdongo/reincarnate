import "./Amenitieschild.css";
import { useNavigate } from "react-router-dom";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Lobby1 from "./Suns/Lobby1";
import Loby2 from "./Suns/Loby2";

function Amenities() {
  let navigate = useNavigate();

  return (
    <div className="kubwa-resident">
      <div className="flexbox-container-living">
        <div className="flexbox-item-living1">
          <div className="amenities-logo">
            <img
              src="http://testdeploy.thesaruni.com/SaruniLogo.png"
              className="saruni-logo"
              alt="logo"
            />
          </div>

          <div className="page-title">
            <h1 className="page-topic"> THE AMENITIES</h1>
          </div>

          <div className="sidebar-center">
            <h4
              className="activelink"
              onClick={() => {
                navigate("/amenities");
              }}
            >
              LOBBY
            </h4>
            <h4
              onClick={() => {
                navigate("/pool");
              }}
              id="rooms"
            >
              THE HEATED INFINITY POOL
            </h4>
            <h4
              onClick={() => {
                navigate("/sunrise");
              }}
              id="rooms"
            >
              {" "}
              EASTWARD SKY GARDEN
            </h4>
            <h4
              onClick={() => {
                navigate("/sunset");
              }}
              id="rooms"
            >
              {" "}
              WESTWARD SKY GARDEN
            </h4>
            <h4
              onClick={() => {
                navigate("/gym");
              }}
              id="rooms"
            >
              {" "}
              GYM
            </h4>
            <h4
              onClick={() => {
                navigate("/courtyard");
              }}
              id="rooms"
            >
              {" "}
              COURTYARD
            </h4>
          </div>
        </div>
        <div className="flexbox-item-living2">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={190}
            totalSlides={2}
          >
            <Slider>
              <Slide index={0}>
                {" "}
                <Lobby1 />
                <ButtonNext id="single-carousel-button" className="right-arrow">
                  <FaAngleRight />
                </ButtonNext>
              </Slide>

              <Slide index={1}>
                <Loby2 />

                <ButtonBack
                  id="single-right-carousel-button"
                  className="right-arrow"
                >
                  <FaAngleLeft />
                </ButtonBack>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
