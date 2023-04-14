import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullMenu from "./Components/Navbar/FullMenu";
import Contact from "./Components/Contact/Contact";
import Availability from "./Components/Availability/Availability";
import Home from "./Components/Home/Home";
import Cara from "./Components/Home/Cara";
import Residence from "./Components/Residence/Residence";
import Living from "./Components/Residence/Living";
import Redirect from "./Components/Home/Redirect";
import ResidenceHome from "./Components/Residence/ResidenceHome";
import NeighborMap from "./Components/Neighborhood/NeighborMap";
import "./App.css";
import Kitchen from "./Components/Residence/Kitchen";
import Bedroom from "./Components/Residence/Bedroom";
import Bathroom from "./Components/Residence/Bathroom";
import Dining from "./Components/Residence/Dining";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preparingpages" element={<Redirect />} />

        <Route path="/menu" element={<FullMenu />} />
        <Route path="/carousel" element={<Cara />} />
        {/* RESIDENCE */}
        <Route path="/residence" element={<Residence />} />
        <Route path="/map" element={<NeighborMap />} />
        {/* ROOMS */}
        <Route path="/livingroom" element={<Living />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/dining" element={<Dining />} />


        <Route path="/availability" element={<Availability />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
