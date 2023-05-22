import "./Availability.css";

function Availability() {
  return (
    <div class="flexbox-container-availability">
        <div className="flexbox-item-availability1">
          <div className="lux-heading">
            <h1 className="topic-lux">LUXURY UNITS</h1>
            
          </div> 
          {/* BODY SECTION */}
          <div className="sect-body">

            <div className="body-one">

              <div className="lux-body-upjuu">
               
                <h2 className="body-lux tittle">
                  {" "}
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    1
                  </p>{" "}
                  BEDROOM APARTMENTS
                </h2>

                <ul>
                  <li className="body-lux one">
                    Starting from 77sqm (829 sqft)
                  </li>
                  <li className="body-lux one">
                    Beautiful West side facing Courtyard
                  </li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                </ul>
              </div> 

              <div className="lux-body-upple">
                <h2 className="body-lux tittle">
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    2
                  </p>{" "}
                  BEDROOM APARTMENTS
                </h2>
                <ul>
                  <li className="body-lux one">
                    Starting from 132sqm (1421sqft)
                  </li>
                  <li className="body-lux one">DSQ with private access</li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                  <li className="body-lux one">
                    Well-ventilated Laundry Yard
                  </li>
                  <li className="body-lux one">
                    Beautiful useable sizeable balconies
                  </li>
                  <li className="body-lux one">
                    Amazing views both Surbub on North and Either East Side City
                    View or West Side Views
                  </li>
                </ul>
              </div>
              
            </div>

            <div className="body-two">
              <div className="lux-body-updown">
                <h2 className="body-lux tittle">
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    3
                  </p>{" "}
                  BEDROOM APARTMENTS
                </h2>
                <ul>
                  <li className="body-lux one">
                    {" "}
                    Starting from 218 sqm (2347sqft)
                  </li>
                  <li className="body-lux one">DSQ with private access</li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                  <li className="body-lux one">
                    Well-ventilated Laundry Yard 
                  </li>
                  <li className="body-lux one">
                    Beautiful useable sizeable balconies
                  </li>
                  <li className="body-lux one">
                    3 beedrooms have spectacular views both Surbub on North and
                    Either East Side City View or West Side Views
                  </li>
                </ul>
              </div>

              <div className="lux-body">
                <h2 className="body-lux tittle">
                  <p className="number" style={{ display: "inline" }}>
                    {" "}
                    4
                  </p>{" "}
                  DUPLEX 
                  <p>PENTHOUSES</p>
                </h2>
                <ul>
                  <li className="body-lux one">
                    {" "}
                    Starting from 623sqm (6706sqft)
                  </li>
                  <li className="body-lux one">Private Rooftop terrace</li>
                  <li className="body-lux one">
                    DSQ with private access and well-ventilated
                  </li>
                  <li className="body-lux one">
                    {" "}
                    Open plan Kitchen fit with European appliances
                  </li>
                  <li className="body-lux one">
                    Luxurious West side facing courtyard views East Side City
                    View or West Side Views
                  </li>
                </ul>
              </div>
            </div>


          </div>
         

        </div>

        <div class="flexbox-item-availability2">
          <img
            src="http://testdeploy.thesaruni.com/avilability.jpg"
            alt="residence"
            className="apartment-view"
          />
        </div>
      </div>
  );
}

export default Availability;
