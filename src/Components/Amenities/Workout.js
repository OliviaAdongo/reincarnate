import "./Amenitieschild.css";
import { useNavigate } from "react-router-dom";
import Gym from "./Suns/Gym";

function Workout() {
  let navigate = useNavigate();

  return (
    <div className="kubwa-resident">
      <div className="flexbox-container-living">
        <div className="flexbox-item-living1">
          <div className="amenities-logo">
            <img
              src="http://testdeploy.thesaruni.com/SaruniLogo.png"
              className="saruni-logo"
              alt="logo"
            />
          </div>

          <div className="page-title">
            <h1 className="page-topic"> THE AMENITIES</h1>
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
              EASTWARD SKY GARDEN
            </h4>
            <h4
              onClick={() => {
                navigate("/sunset");
              }}
              id="rooms"
            >
              {" "}
              WESTWARD SKY GARDEN
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
          <Gym />
        </div>
      </div>
    </div>
  );
}

export default Workout;
