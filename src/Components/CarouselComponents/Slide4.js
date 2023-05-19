import "./Slides.css";
import neighhome from "./image/neighhome.jpg";

function Slide4() {
  return (
    <div className="flexbox-container">
      <div className="flexbox-item-1" id="home-slide">
      <div class="logo">
          <img
            src="https://thesaruni.com/images/SaruniLogo.png"
            alt="Logo"
            className="logo"
          />
        </div>
      <div className="item">
      <h4  className="home-tittle">AN <br/>EXCLUSIVE <br/>ADDRESS </h4>
        <h5  className="home-description">
          Riverside Drive is the Premium 
          <br/>expresssion of privacy, <br/> prestige and
          convenience.
        </h5>
      </div>
       
      </div>
      <div className="flexbox-item-2">
        <img
          src={neighhome}
          alt="THE SARUNI RESIDENCES"
          className="building-profile"
        />
      </div>
    </div>
  );
}

export default Slide4;
