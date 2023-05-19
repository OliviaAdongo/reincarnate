import "./Rooms.css";
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
import DiningR from "./Rosel/DiningR";
import DiningL from "./Rosel/DiningL";

function Dining() {
  let navigate = useNavigate();

  return (
    <div className="kubwa-resident">
      
      <div className="flexbox-container-living">
        <div className="flexbox-item-living1">


          <div className="heading">
            <img
              src="http://testdeploy.thesaruni.com/logowhite.png"
              className="logo"
              alt="logo"
            />
          </div> 

          <div className="page-title">
            <h1 className="page-topic">THE RESIDENCE</h1>
          </div>

          <div className="sidebar-center">
            <h4
            id="rooms"
              onClick={() => {
                navigate("/livingroom");
              }}
            >
              LIVING AREA
            </h4>
            <h4
              onClick={() => {
                navigate("/bedroom");
              }}
              id="rooms"
            >
              BEDROOMS
            </h4>
            <h4
              onClick={() => {
                navigate("/kitchen");
              }}
              id="rooms"
            >
              {" "}
              KITCHEN
            </h4>
            <h4
              onClick={() => {
                navigate("/dining");
              }}
             className="activelink"
            >
              {" "}
              DINING
            </h4>
            <h4
              onClick={() => {
                navigate("/bathroom");
              }}
           id="rooms"
            >
              {" "}
              BATHROOM
            </h4>
            <h4
              onClick={() => {
                navigate("/balcony");
              }}
            id="rooms"
            >
              {" "}
              BALCONY
            </h4>
          </div>




      
          
        </div>
        <div className="flexbox-item-living2">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={200}
            totalSlides={2}
          >
            <Slider>
              <Slide index={0}>
                {" "}
                <DiningL />
                <ButtonNext id="single-carousel-button" className="right-arrow">
                  <FaAngleRight />
                </ButtonNext>
              </Slide>
 
              <Slide index={1}>
                <DiningR />

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

export default Dining;
