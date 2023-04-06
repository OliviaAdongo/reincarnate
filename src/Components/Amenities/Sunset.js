
import { useNavigate } from "react-router-dom";
import ChildNav from "../Navbar/ChildNav";
import "./Sun.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Tua from "./Suns/Tua";
import West from "./Suns/West";

function Sunset() {
  let navigate = useNavigate();
  return (
    <div className="kubwa-sun">
      <div>
        <ChildNav />{" "}
      </div>
      <div class="flexbox-container-sun">
        <div class="flexbox-item-sun1" style={{ marginRight: "15px" }}>
          <div className="the-sun">
            <img
              src="http://testdeploy.thesaruni.com/SaruniLogo.png"
              className="residence-home-logo-grey spec"
              alt="logo"
            />

            <h6 className="the-section one">T H E </h6>
            <h1 className="brown-section two"> S P E C T A C U L A R</h1>
            <h1 className="brown-section two"> S K Y G A R D E N S</h1>
          </div>

          <div className="center1">
            <p className="sunner">Wind down to the sunset on the west</p>
          </div>

          <div className="disclaimerr">
            <h4 className="eastward">T H E </h4>
            <h4 className="eastward">W E S T W A R D</h4>
            <h4 className="eastward"> G A R D E N</h4>
            <p className="east-gard">
              is located on the 12th and 13th floor facing the plush Lavington
              area and its environs
            </p>
          </div>
        </div>

        <div class="flexbox-item-sun2">

        <Carousel infiniteLoop>
                <div>
                    <Tua/>
                </div>
                <div>
                    <West/>
                </div>
            </Carousel>
            <div
            className="explore"
            onClick={() => {
              navigate("/amenitiesinfinity");
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
             EXPLORE  MORE 
             {/* <FaAngleUp style={{ marginRight: "20px" }} /> */}
            </h1>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Sunset;
