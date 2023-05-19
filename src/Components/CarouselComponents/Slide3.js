import "./Slides.css";
import amenitieshome from "/Users/apple/work/job/apartment/src/Components/CarouselComponents/image/rover.jpg";

function Slide3() {
  return (
    <div className="flexbox-container">
      <div className="flexbox-item-1"  id="home-slide">
      <div class="logo">
          <img
            src="https://thesaruni.com/images/SaruniLogo.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <div  className="item">
        <h4  className="home-tittle">A LIFESTYLE  <br/>CONCIEVED</h4>
        <h5  className="home-description" >CURATED <br/>for the most discerning urban <br/>connoisseur</h5>
        </div>
        
      </div>
      <div className="flexbox-item-2">
        <img
          src={amenitieshome}
          alt="THE SARUNI RESIDENCES"
          className="building-profile"
        />
      </div>
    </div>
  );
}

export default Slide3;
