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
// import Available from "./Components/Availability/Available";

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

        <Route path="/livingroom" element={<Living />} />

        <Route path="/availability" element={<Availability />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
