import "./About.css";

function About() {
  return (  
    <div>
     
      <div class="flexbox-container-contact">
        <div class="flexbox-item-contact1">
          <div className="about">
            <div className="ablogo">
              <img
                src="http://testdeploy.thesaruni.com/SaruniLogo.png"
                className="spec"
                alt="logo"
              />
            </div>

            <div className="address" id="post">
              <p className="strand" id="about">
                Riverside Drive, Nairobi, Kenya
              </p>
              <p className="strand" id="about">
                T: +254 759 278 564
              </p>
              <p className="strand" id="about">
                {" "}
                T: +254 745 466 634
              </p>
              <p className="strand" id="about">
                E: info@thesaruni.com
              </p>
            </div>
            <div className="property-developers" id="contributer">
              <p id="about">
                The Saruni brings together a renowned team of talented
                professionals.
              </p>
              <p className="developer">PROPERTY DEVELOPER</p>
              <p className="address-developer" id="about">
                RIVERSIDE STRAND PROPERTY DEVELOPMENT COMPANY LTD
              </p>
              <p className="address-developer">
                {" "}
                P.O BOX 62899-00200, NAIROBI KENYA
              </p>
              <p className="developer">PROJECT MANAGERS</p>
              <p className="address-developer" id="about">
                TURNER & TOWNSEND
              </p>
              <p className="address-developer">
                {" "}
                P.O BOX 62899-00200, NAIROBI KENYA
              </p>
              <p className="developer">ARCHITECTS</p>
              <p className="address-developer" id="about">
                INNOVATIVE PLANNING & DESIGN CONSULTANTS
              </p>{" "}
              <p className="address-developer">
                {" "}
                P.O BOX 1575-00502, NAIROBI KENYA
              </p>
              <p className="developer">QUANTITY SURVEYORS</p>
              <p className="address-developer" id="about">
                TOWER COST CONSULTANTS
              </p>
              <p className="address-developer">
                {" "}
                P.O BOX 27555-00506, NAIROBI KENYA
              </p>
              <p className="developer">STRUCTURAL & CIVIL ENGINEERS</p>
              <p className="address-developer" id="about">
                ABBA & WANDU ENGINEERS
              </p>
              <p className="address-developer">
                {" "}
                P.O BOX 17085-00100, NAIROBI KENYA
              </p>
            </div>
          </div>
        </div>

        <div class="flexbox-item-contact2" id="aboutback">
          <img
            src="http://testdeploy.thesaruni.com/home.jpg"
            alt="bag"
            className="building"
          />
        </div>
        
      </div>
    </div>
  );
}

export default About;
