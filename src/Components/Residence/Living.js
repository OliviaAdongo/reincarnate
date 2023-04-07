import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import { Carousel } from "react-responsive-carousel";
import LivingL from "./Rosel/LivingL";
import LivingR from "./Rosel/LivingR";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Living() {
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
            <h6 className="page-heading top">T H E </h6>
            <h1 className="page-heading"> R E S I D E N C E S</h1>
          </div>
          <div className="sidebar-center">
            <h4
              className="activelink"
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
          </div>
          <div className="paragraph-bottom-disclaimer">
            <h4 id="disclaimer1">DISCLAIMER</h4>
            <p id="disclaimer2">
              These 3 & 2 bedroom apartment artistic impressions or image
              renders contained on this website are for illustrative on this
              website are for illustrative purposes only and should not be
              relied upon as being complete or accurate
            </p>
          </div>
        </div>
        <div className="flexbox-item-living2">
          <Carousel infiniteLoop>
            <div>
              <LivingL />
              <div>
                <button
                  className="fa fa-arrow-right"
                  id="button-animation"
                  onClick={() => {
                    navigate("/livingroom");
                  }}
                  // style={{background:"pink"}}
                >
                  <FaAngleRight id="arrow" />
                </button>
              </div>
              
            </div>
            <div>
              <LivingR />
              <div>
                <button
                  className="fa fa-arrow-right"
                  id="button-animation"
                  onClick={() => {
                    navigate("/livingroom");
                  }}
                  // style={{background:"pink"}}
                >
                  <FaAngleRight id="arrow" />
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Living;
