import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/home";
import Gameplay from "./pages/gameplay";
import Plot from "./pages/plot";
import Error from "./pages/error";

import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="gameplay" element={<Gameplay />} />
      <Route path="plot" element={<Plot />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
