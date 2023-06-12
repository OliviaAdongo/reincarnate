import "./Availability.css";

function Availability() {
  return (
    <div className="flexbox-container">
    <div className="flexbox-item-availability1">
      <div className="heading" id='head'>
        <h1 className="page-topic">LUXURY UNITS</h1>
      </div>
      <div className="container">
        <div className="one">
          <h2 className="apartment">
            <p className="number">1</p>
            BEDROOM APARTMENTS
          </h2>

          <ul>
            <li className="room-description">
              Starting from 77sqm (829 sqft)
            </li>
            <li className="room-description">
              Beautiful West side facing Courtyard
            </li>
            <li className="room-description">
              Open plan Kitchen fit with European appliances
            </li>
          </ul>
        </div>
        <div className="two">
          <h2 className="apartment">
            <p className="number">2</p>
            BEDROOM APARTMENTS
          </h2>
          <ul>
            <li className="room-description">
              Starting from 132sqm (1421sqft)
            </li>
            <li className="room-description">DSQ with private access</li>
            <li className="room-description">
              Open plan Kitchen fit with European appliances
            </li>
            <li className="room-description">
              Well-ventilated laundry yard
            </li>
            <li className="room-description">
              Beautiful useable sizeable balconies
            </li>
            <li className="room-description">
              Amazing views both Surbub on North and either East Side City
              View or West Side Views
            </li>
          </ul>
        </div>
        <div className="three">
          <h2 className="apartment">
            <p className="number">3</p>
            BEDROOM APARTMENTS
          </h2>
          <ul>
            <li className="room-description">
              {" "}
              Starting from 218 sqm (2347sqft)
            </li>
            <li className="room-description">DSQ with private access</li>
            <li className="room-description">
              {" "}
              Open plan Kitchen fit with European appliances
            </li>
            <li className="room-description">
              Well-ventilated Laundry Yard
            </li>
            <li className="room-description">
              Beautiful useable sizeable balconies
            </li>
            <li className="room-description">
              3 beedrooms have spectacular views both Surbub on North and
              Either East Side City View or West Side Views
            </li>
          </ul>
        </div>
        <div className="four">
          <h2 className="apartment">
            <p className="number">4</p>
            DUPLEX PENTHOUSES
          </h2>
          <ul>
            <li className="room-description">
              {" "}
              Starting from 623sqm (6706sqft)
            </li>
            <li className="room-description">Private Rooftop terrace</li>
            <li className="room-description">
              DSQ with private access and well-ventilated
            </li>
            <li className="room-description">
              {" "}
              Open plan Kitchen fit with European appliances
            </li>
            <li className="room-description">
              Luxurious West side facing courtyard views East Side City View
              or West Side Views
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flexbox-item-availability2">
      <img
        src="http://testdeploy.thesaruni.com/avilability.jpg"
        alt="residence"
        className="side-image"
      />
    </div>
  </div>
  );
}

export default Availability;
