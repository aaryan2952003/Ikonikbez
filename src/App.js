/* eslint-disable */
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Switch
} from "react-router-dom";
// import { Redirect, Switch } from "react-router";
// import { Switch } from "react-router";
// import { useState } from "react";
import SideBar from "./Components/sidebar";
import Navbar from "./Components/navbar";
import Dashboard from "./Components/dashboard";
import Listing from "./Components/listing";
import Order from "./Components/order";
import Order_detail from "./Components/order_detail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="bg-[#FEF0DC] flex">
          <div className="flex ml-2">
            <SideBar />
          </div>
          <div className="">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/listing" element={<Listing />} />

              <Route path="/order" element={<Order />} />

              <Route path="/order_detail" element={<Order_detail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
