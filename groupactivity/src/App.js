import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import HomePage from "./pages/HomePage";
import AddPropertyPage from "./pages/AddPropertyPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

// Import Components
import PropertyCard from "./components/Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addproperty" element={<AddPropertyPage />} />
        <Route path="/propertydetails" element={<PropertyDetailsPage />} />
      </Routes>
    </Router>

  );
}

export default App;
