import "./Resident.css";
// import { useNavigate } from "react-router-dom";

function ResidenceHome() {
  // let navigate = useNavigate();

  return (
    <div className="flexbox-container-resident">
      <div className="flexbox-item-resident-1">
        <div class="logo">
          <img src="https://thesaruni.com/images/SaruniLogo.png" alt="Logo" />
        </div>
        <h4 className="reside">INSPIRATION </h4>
        <h5 className="reside-paragraph ">
          THE SARUNI, is a unique contemporary development that is the
          embodiment of a luxurious lifestyle{" "}
        </h5>
        <h5 className="reside-paragraph"> surrounded by spectacular </h5>
        <h5
          className="reside-paragraph"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "}
          uninterrupted views
        </h5>
  
      </div>
      <div className="flexbox-item-resident-2">
        <img
          src="https://testdeploy.thesaruni.com/residencehome.jpg"
          alt="residence"
          className="residence-profile"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ResidenceHome;
