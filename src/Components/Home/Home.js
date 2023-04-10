import { FaAngleRight} from "react-icons/fa";
import "./Home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  let navigate = useNavigate()
  useEffect(() => {
    sessionStorage.setItem("numberReloaded", 1);
  }, []);

  return (
    <div>
      <div className="flexbox-container">
      <Navbar/>
      
        <div className="logo-section-landing">
          <img
            src="https://testdeploy.thesaruni.com/Saruni-Logo.png"
            alt="logo"
            className="home-logo"
          />
        </div> 
        <div className="home-content">
          <p className="lore"> RESIDE IN A LUXURIOUS </p>
          <p className="lore">SANCTUARY</p>
          <p className="home-nest">Nestled in unparalleled tranquility</p>
        </div>

        <div>
        <button className="fa fa-arrow-right" id="button-pulseright"  
        onClick={() => {
            navigate("/preparingpages"); 
          }}
        >
        <FaAngleRight id="arrow" />

        </button>
          
        {/* <button className="fa fa-arrow-left" id="button-pulseleft">
        <FaAngleLeft className="arrow" />

        </button>
           */}
    
          {/* <i class="fa fa-arrow-left"></i>
          <i class="fa fa-chevron-down"></i>
          <i class="fa fa-arrow-right"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
