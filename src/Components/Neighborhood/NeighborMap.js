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
      <img
            src="https://testdeploy.thesaruni.com/map.jpg"
            alt="residence"
            className="map"
            loading="lazy"
          />
      </div>
      <section className="explore-section">
        <h1 className="explorer">
          <a href="/neighborhood" className="downarrow jir">
            EXPLORE MORE
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
    
  );
}

export default NeighborMap;
