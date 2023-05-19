import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullMenu from "./Components/Navbar/FullMenu";
import CarouselSlide from "./Components/CarouselComponents/CarouselSlide";
import Navbar from "./Components/Navbar/Navbar";
import Availability from "./Components/Availability/Availability";
import Contact from "./Components/Contact/Contact";
import NeighborMap from "./Components/Neighborhood/NeighborMap";
import Residence from "./Components/Residence/Residence";
import Living from "./Components/Residence/Living";
import Bedroom from "./Components/Residence/Bedroom";
import Kitchen from "./Components/Residence/Kitchen";
import Dining from "./Components/Residence/Dining";
import Bathroom from "./Components/Residence/Bathroom";
import Balcony from "./Components/Residence/Balcony";
import Amenities from "./Components/Amenities/Amenities";
import Heatedpool from "./Components/Amenities/Heatedpool";
import EastSkygarden from "./Components/Amenities/EastSkygarden";
import WestSkygarden from "./Components/Amenities/WestSkygarden";
import Workout from "./Components/Amenities/Workout";
import Court from "./Components/Amenities/Court";
import Neighborhood from "./Components/Neighborhood/Neighborhood";

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<CarouselSlide />} />
        <Route path="menu" element={<FullMenu />} />
        <Route path="availability" element={<Availability />} />
        <Route path="contact" element={<Contact />} />
        <Route path="map" element={<NeighborMap />} />
        {/* RESIDENCES */}
        <Route path="residence" element={<Residence />} />
        <Route path="livingroom" element={<Living />} />
        <Route path="bedroom" element={<Bedroom />} />
        <Route path="kitchen" element={<Kitchen  />} />
        <Route path="dining" element={<Dining />} />
        <Route path="bathroom" element={<Bathroom/>} />
        <Route path="balcony" element={<Balcony/>} />
        {/* AMENITIES */}
        <Route path="amenities" element={<Amenities/>} />
        <Route path="pool" element={<Heatedpool/>} />
        <Route path="sunrise" element={<EastSkygarden/>} />
        <Route path="sunset" element={<WestSkygarden/>} />
        <Route path="gym" element={<Workout/>} />
        <Route path="courtyard" element={<Court/>} />
        {/* NEIGHBORHOOOD */}
        <Route path="neighborhood" element={<Neighborhood/>} />

      </Routes>
    </Router>
  );
}

export default App;
