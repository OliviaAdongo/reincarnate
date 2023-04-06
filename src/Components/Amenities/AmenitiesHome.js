import "./Amenities.css";
// import { useNavigate } from "react-router-dom";

function AmenitiesHome() {
  // let navigate = useNavigate();
 
  return ( 
    <div className="flexbox-container-amenity">
      <div className="flexbox-item-amenity-1">
      <div class="logo3" >
  <img src="https://thesaruni.com/images/SaruniLogo.png" alt="Logo"/>
</div>
<h4 className="reside style">A  </h4>
        <h4 className="reside style"
                  style={{ marginTop: "15px", marginBottom: "15px" }}

        > L I F E S T Y L E </h4> 
        <h4
          className="reside style" 
          style={{ marginTop: "15px", marginBottom: "15px" }}

        >
          {" "}
          M E T I C U L O U S L Y
        </h4>
        <h4
          className="reside style"
          style={{ marginTop: "15px", marginBottom: "15px" }}

      
        >
          {" "}
          C U R A T E D
        </h4>

        <h5 className="reside-paragraph disc">
          {" "}
          for the most discerning urban{" "}
        </h5>
        <h5
          className="reside-paragraph disc"
          style={{ marginTop: "15px", marginBottom: "15px" }}
          
        >
          {" "}
          connoisseur
        </h5>

        {/* <button
          onClick={() => {
            navigate("/amenities");
          }}
          className="button-46"
        >
          THE AMENITIES
        </button>  */}
      </div>
      <div className="flexbox-item-amenity-2">
      <img
        src="http://testdeploy.thesaruni.com/rover.jpg"
          alt="residence"
          className="amenity-profile"
          loading="lazy"
        />
      </div>
    </div> 
  );
}

export default AmenitiesHome;
