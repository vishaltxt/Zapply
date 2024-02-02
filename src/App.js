import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applynow from "./components/applynow";
import Recommended from "./components/recommended";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Applynow />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>
      </Router>
    </div >
  );
}
export default App;
