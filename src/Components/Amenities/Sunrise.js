import "./Sun.css";
// import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import { FaAngleDown } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Jua from "./Suns/Jua";
import East from "./Suns/East";
import { useNavigate } from "react-router-dom";


function Sunrise() {
  let navigate =useNavigate()

  return (
    <div className="kubwa-sun">
      <div>  
        <ChildNav />{" "}
      </div>
      <div class="flexbox-container-sun">
        <div class="flexbox-item-sun1 purple" style={{marginRight:"15px"}}>
          <div className="the-sun"> 
            <img
              src="http://testdeploy.thesaruni.com/SaruniLogo.png"
              className="residence-home-logo-grey spec"
              alt="logo"
            />

            <h6 className="the-section one">T H E </h6>
            <h1 className="brown-section two"> S P E C T A C U L A R</h1>
            <h1 className="brown-section two">S K Y G A R D E N S</h1>
          </div>

          <div className="center1">
            <p className="sunner">Wake up to the sunrise on the East</p>
          </div>

          <div className="disclaimerr">
            <h4 className="eastward">T H E </h4>
            <h4 className="eastward">E A S T W A R D </h4>
            <h4 className="eastward"> G A R D E N</h4>
            <p className="east-gard">
              is located on the 9th and 10th floor and presents amazing views of
              the Nairobi CBD area.
            </p>
           
          </div>

        </div>

        <div class="flexbox-item-sun2  green">
        <Carousel infiniteLoop>
                <div>
                    <Jua/>
                    <p className="legend" style={{backgroundColor:"goldenrod",  fontSize:"15px"}}>View from Outside</p>
                </div>
                <div>
                    <East/>
                    <p className="legend" style={{backgroundColor:"goldenrod", fontSize:"15px"}}>View from Within</p>
                </div>
            </Carousel>
            <div
            className="explore"
            onClick={() => {
              navigate("/sunset");
            }}
          >
            <h1
              className="nav-to"
              style={{
                fontWeight: "normal",
                fontSize: "25px",
                marginTop: "-23px",
              }}
            >
             SUNSET <FaAngleDown style={{ marginRight: "20px" }} />
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sunrise;
