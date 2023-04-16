import ChildNav from "../Navbar/ChildNav";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div>
        <ChildNav />{" "}
      </div>
      <div class="flexbox-container-contact">
        <div class="flexbox-item-contact1">
          <div className="the-address">
            <h1 className="getintouch">Get in Touch </h1>
            {/* <img
              src="http://testdeploy.thesaruni.com/SaruniLogo.png"
              className="spec"
              alt="logo"
            /> */}
          </div>

          <div className="address" id="post">
            <h1 className="find">ONE-TWO-THREE-FOUR BEDROOM </h1>
            <h1 className="fd">LUXURY UNITS </h1>

            <p className="strand">Riverside Drive, Nairobi, Kenya</p>
            <p className="strand">T: +254 759 278 564</p>
            <p className="strand"> T: +254 745 466 634</p>
            <p className="strand">E: info@thesaruni.com</p>
          </div>

          <div className="property" id="pot">
            <p className="devs">PROPERTY DEVELOPER</p>
            <p className="strand">
              Riverside Strand Property Development Company Ltd.
            </p>
          </div>
          <div id="post">
            <p className="strand">
              <a
                href="http://testdeploy.thesaruni.com/TermsandConditions.pdf"
                // href="https://docs.google.com/document/d/1DasoHkLLXmxrDEfAhTiRxhIoHnSIjASt/edit?usp=sharing&ouid=104257712004828164472&rtpof=true&sd=true"
                className="terms"
                target="_blank"
              >
                Terms and Conditions
              </a>
              <div>
                <p className="small-paragraph">
                  Disclaimer:
                  <p>
                    The information contained in this website is solely for
                    general marketing purposes and should not be relied upon as
                    being complete or accurate. No legal relationship or advice
                    is implied. Artistic impressions or image renders contained
                    in this website are for illustrative purposes only. No
                    representations or warranties are implied by Riverside
                    Strand Property Development Company Limited (“Riverside
                    Strand”). Riverside Strand shall not be liable for any loss
                    or damage howsoever arising from reliance upon the
                    information contained in this website. Purchases are subject
                    to contractual terms.{" "}
                  </p>
                </p>
              </div>
            </p>
          </div>
        </div>

        <div class="flexbox-item-contact2">
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

export default Contact;
