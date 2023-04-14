import "./Resident.css";

function ResidenceHome() {
  return (
    <div className="flexbox-container-resident">
      <div className="flexbox-item-resident-1">
        <div class="logo">
          <img src="https://thesaruni.com/images/SaruniLogo.png" alt="Logo" />
        </div>
        <h4 className="reside">INSPIRATION </h4>
        <h5 className="reside-paragraph">
          THE SARUNI, is a unique
        </h5>
        <h5 className="reside-paragraph">
          contemporary
        </h5>
        <h5 className="reside-paragraph">development that is the </h5>
        <h5 className="reside-paragraph">
          {" "}
          embodiment of a luxurious lifestyle{" "}
        </h5>
        <h5 className="reside-paragraph"> surrounded by spectacular </h5>
        <h5 className="reside-paragraph"> uninterrupted views.</h5>
      </div>
      <div className="flexbox-item-resident-2">
        <img
          src="https://testdeploy.thesaruni.com/inspiration.jpg"
          alt="residence"
          className="residence-profile"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ResidenceHome;
