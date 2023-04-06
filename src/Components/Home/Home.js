import { FaAngleRight} from "react-icons/fa";
import "./Home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate()
  useEffect(() => {
    sessionStorage.setItem("numberReloaded", 1);
  }, []);

  return (
    <div>
      <div className="flexbox-container">
        <div className="logo-section-landing">
          <img
            src="https://testdeploy.thesaruni.com/Saruni-Logo.png"
            alt="logo"
            className="home-logo"
          />
        </div>
        <div className="home-content">
          <p className="lore">A L U X U R I O U S</p>
          <p className="lore">S A N C T U A R Y</p>
          <p className="home-nest">nested in unparalleled tranquility</p>
        </div>
        <div>
        <button className="fa fa-arrow-right" id="button-pulseright"  
        onClick={() => {
            navigate("/carousel"); 
          }}
        >
        <FaAngleRight className="arrow" />

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
