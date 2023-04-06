import "./Ataglance.css";
import ChildNav from "../Navbar/ChildNav";
import { FaAngleDown } from "react-icons/fa";

function AtaGlance() {
  return (
    <div className="kubwa">
      <div>
        <ChildNav />{" "} 
      </div>
      <div className="section1">
        <div class="flexbox-container-ataglance">
          <div class="flexbox-item-ataglance1 purple at">
            <div className="glance1">
              <h4 className="topper r">
                AMENITIES AT  {" "}
              </h4>
              <h4 className="topper">
                <a className="toper" href="/ataglance" style={{color:"grey"}}>A </a> GLANCE
              </h4>
            </div>

            <div className="glance two">
              <div className="logosection">
                <img
                  src="http://testdeploy.thesaruni.com/logogrey.png"
                  className="residence-home-logo-greyy"
                  alt="logo"
                />

                <h1 className="amenn">LEISURE</h1>
              </div>
              <div className="list-amenities  two">
                <ul>
                  <li>Reception lobby and management office</li>
                  <li>2 High speed lifts</li>
                  <li>
                    24Hr Security services at the gate and on property intercom
                  </li>
                  <li>Ample Parking</li>
                  <li>Full backup generator</li>
                  <li>24 Hr CCTV</li>
                  <li>Perimeter electric fence</li>
                  <li>Borehole</li>
                </ul>
              </div>
            </div>

            <div className="glance three">
              <div className="logosection well">
                <img
                  src="http://testdeploy.thesaruni.com/logogrey.png"
                  className="residence-home-logo-greyy"
                  alt="logo"
                />

                <h1 className="amenn well">WELLNESS</h1>
              </div>
              <div className="list-amenities three">
                <ul>
                  <li>Modern fitted gym</li>
                  <li>Sauna</li>
                  <li>Steam Room</li>
                </ul>
              </div>
            </div>

            <div className="glance four">
              <div className="logosection rej">
                <img
                  src="http://testdeploy.thesaruni.com/logogrey.png"
                  className="residence-home-logo-greyy"
                  alt="logo"
                />

                <h1 className="amennn">REJUVENATION</h1>
              </div>
              <div className="list-amenities  four">
                <ul>
                  <li>East and West Skygardens</li>
                  <li>Infinity Heated poool</li>
                  <li>Ground level manicured and landscaped coutyard garden</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flexbox-item-ataglance2">
            <img
              src="http://testdeploy.thesaruni.com/avilability.jpg"
              alt="residence"
              className="neighborhood-profile"
            />
          </div>
        </div>
      </div>
      <section className="explore-section">
        <h1 className="explorer">
          <a href="/sunrise" className="downarrow">
            <FaAngleDown />
          </a>
        </h1>
      </section>
    </div>
  );
}

export default AtaGlance;
