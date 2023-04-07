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
        <div>
          <h4 className="catch">LUXURY UNITS</h4>
        </div>
        <div>
          <h1 className="mid-top">CAREFULLY </h1>
          <h1 className="mid-top">CONSIDERED </h1>

          <h1 className="mid-top">& METICULOUSLY </h1>

          <h1 className="mid-top">DESIGNED</h1>
        </div>
        <div>
          <h5 className="rparagraph">
            {" "}
            With uninterrupted views from each apartments, 'The Saruni' at
            Riverside Drive, is a modern interpretation of contemporary luxury
            specifically designed to enhance your living experience
          </h5>
        </div>

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
