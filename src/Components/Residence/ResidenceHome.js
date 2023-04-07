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
 
        <h4 className="reside">R E S I D E </h4>
        <h4
          className="reside"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "} 
          I N
        </h4> 
        <h4
          className="reside"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "}
          L U X U R Y
        </h4>

        <h5 className="reside-paragraph"> surrounded by spectacular </h5>
        <h5
          className="reside-paragraph"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {" "}
          uninterrupted views
        </h5>
        {/* <button
          onClick={() => {
            navigate("/residence ");
          }}
          className="button-46"
        >
          THE RESIDENCES
        </button> */}
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
