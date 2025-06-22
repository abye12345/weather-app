import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import View from "./ViewWeather/View";
import Learnmore from "./Learn/Learnmore";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/view" element={<View />} />
            <Route path="/learn" element={<Learnmore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
