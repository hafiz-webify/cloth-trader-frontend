import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Packing from "./pages/Packing";
import ShopStock from "./pages/ShopStock";
import EmbroideryDetails from "./pages/Embroidery";
import Reports from "./pages/Reports";
import FabricDetails from "./pages/FabricDetail";
 ;

function App() {
  return (
    <Router>
      <Routes>
        {/* Directly open Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Other routes */}
        <Route path="/packing" element={<Packing />} />
        <Route path="/shop-stock" element={<ShopStock />} />
        <Route path="/embroidery-details" element={<EmbroideryDetails />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/fabric-details" element={<FabricDetails />} />
          
      </Routes>
    </Router>
  );
}

export default App;
