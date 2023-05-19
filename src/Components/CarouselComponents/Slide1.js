import "./Slides.css";
import homelogo from "/Users/apple/work/job/apartment/src/Components/CarouselComponents/image/saruni-home-logo.png";


function Slide1() {
  return (
    <>
      <div className="home">
        <div className="saruni-logo-section">
        <div class='logo'>
        <img src={homelogo} alt="THE SARUNI" className="saruni-home-logo" />
        </div>
           
        </div>
        <div className="body-section">
          <h1 className="home-heading">RESIDE IN A LUXURIOUS</h1>
          <h1 className="home-heading-2"> SANCTUARY</h1>

          <p className="home-paragraph">Nestled in unparalleled tranquility</p>
        </div>
      </div>
    </>
  );
}

export default Slide1;
