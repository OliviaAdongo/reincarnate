import "./Slides.css";
import residencehome from "./image/inspiration.jpg";

function Slide2() {
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
          <h1 className="home-tittle">INSPIRATION</h1>
          <h5 className="home-description">
            THE SARUNI, is a unique <br /> contemporary <br />
            development that is the
            <br />
            embodiment of a luxurious lifestyle <br /> surrounded by spectacular
            <br />
            uninterrupted views.
          </h5>
        </div>
      </div>
      <div className="flexbox-item-2">
        <img
          src={residencehome}
          alt="THE SARUNI RESIDENCES"
          className="building-profile"
        />
      </div>
    </div>
  );
}

export default Slide2;
