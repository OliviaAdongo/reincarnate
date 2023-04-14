import "./Amenitieschild.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
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
      <div>
        <ChildNav />{" "}
      </div>
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
            <h1 className="page-type"> THE AMENITIES</h1>
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
              EAST SKY GARDEN
            </h4>
            <h4
              onClick={() => {
                navigate("/sunset");
              }}
              id="rooms"
            >
              {" "}
              WEST SKY GARDEN
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

          {/* <div className="disclaimer-section">
            <h4 id="disclaimer-title">DISCLAIMER</h4>
            <p id="disclaimer-body">
              These 3 & 2 bedroom apartment artistic impressions or image
              renders contained on this website are for illustrative on this
              website are for illustrative purposes only and should not be
              relied upon as being complete or accurate
            </p>
          </div> */}
        </div>
        <div className="flexbox-item-living2">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={64.1}
            totalSlides={2}
          >
            <Slider>
              <Slide index={0}>
                {" "}
                <Lobby1 />
                {/* <LivingL /> */}
                <ButtonNext className="fa fa-arrow-right" id="button-pulseleft">
                  <FaAngleRight id="arrow" />
                </ButtonNext>
              </Slide>

              <Slide index={1}>
                <Loby2 />

                <ButtonBack className="fa fa-arrow-right" id="button-pulseleft">
                  <FaAngleLeft id="arrow" />
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
