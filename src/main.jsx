import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import Hotels from "./Pages/Hotels";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path="Restaurant" element={<Restaurants/>} />
        <Route path="Hotel" element={<Hotels />} />
      </Route>
    </Routes>
  </BrowserRouter>
);