import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";



import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import BathroomR from "./Rosel/BathroomR";
import BathroomL from "./Rosel/BathroomL";
import BalconyOut from "./Rosel/BalconyOut";

function Balcony() {
  let navigate = useNavigate();

  return (
    <div className="kubwa-resident">
      <div>
        <ChildNav />{" "}
      </div>
      <div className="flexbox-container-living">
        <div className="flexbox-item-living1">


          <div className="heading-area">
            <img
              src="http://testdeploy.thesaruni.com/logowhite.png"
              className="grey-logo"
              alt="logo"
            />
          </div>

          <div className="page-title">
            <h1 className="page-type"> THE RESIDENCES</h1>
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
              id="rooms"
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
            className="activelink"
            >
              {" "}
              BALCONY
            </h4>
          </div>




          
          
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
                <BalconyOut />
                
              </Slide>

             
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}

export default Balcony;
