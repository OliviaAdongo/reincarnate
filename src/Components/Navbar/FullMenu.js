import "./FullMenu.css";

function FullMenu() {
  return (
    <div className="saruni-menu">
      <div>
        <img
          src="http://testdeploy.thesaruni.com/SaruniLogo.png"
          id="saruni-home-logo-word"
        />
        <p className="logo-heading">THE SARUNI</p>
      </div>

      <a href="/availability">
        <button className="button-80" id="list-menu">
          AVAILABILITY
        </button>

        <h6 className="description-menu">AVAILABLE RESIDENCES</h6>
      </a>

      <a href="/residence">
        <button className="button-80" id="list-menu">
          METICULOUSLY DESIGNED
        </button>
        <h6 className="description-menu">THE RESIDENCES</h6>
      </a>

      <a href="/amenities">
        <button className="button-80" id="list-menu">
          A LIFESTYLE CONCIEVED...
        </button>

        {/* <h1 className="list-menu">A LIFESTYLE CONCEIVED ...</h1> */}
        <h6 className="description-menu">AMENITIES</h6>
      </a>
      <a href="/neighborhood">
        <button className="button-80" id="list-menu">
          AN EXCLUSIVE ADDRESS
        </button>

        {/* <h1 className="list-menu">AN EXCLUSIVE ADDRESS</h1> */}
        <h6 className="description-menu">THE NEIGHBORHOOD</h6>
      </a>
      <a href="/map">
        <button className="button-80" id="list-menu">
          LOCATION
        </button>
        <h6 className="description-menu"> THE MAP</h6>
      </a>
      <div className="bottom-menu">
        <a href="/contact">
          <button className="button-80" id="contact-opt">
            CONTACT
          </button>
        </a>
        <a href="/about">
          <button className="button-80" id="contact-opt">
            ABOUT
          </button>
        </a>
      </div>
    </div>
  );
}

export default FullMenu;
