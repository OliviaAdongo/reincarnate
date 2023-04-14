import { FaAngleDown } from "react-icons/fa";
import ChildNav from "../Navbar/ChildNav";
import "./NeighMap.css";

function NeighborMap() {
  return (
    <div className="parent-div">
      <div className="nav-section">
        <ChildNav />
      </div>
      <div className="map-section">
      <h1 className="maptitle">THE MAP</h1>
      <img
            src="https://testdeploy.thesaruni.com/map.jpg"
            alt="residence"
            className="map"
            loading="lazy"
          /> 
      </div>
      
    </div>
    
  );
}

export default NeighborMap;
