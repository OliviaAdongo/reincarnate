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


import West from "./Suns/West";
import Tua from "./Suns/Tua";
import Gym from "./Suns/Gym";



function Workout() {
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
              className="spec"
              alt="logo"
            />
          </div>

          <div className="page-title">
            <h1 className="page-type"> THE AMENITIES</h1>
          </div>

          <div className="sidebar-center">
            <h4
              id="rooms"
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
             className="activelink"
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
          <Gym/>
        </div>
      </div>
    </div>
  );
}

export default Workout;
