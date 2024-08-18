import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Prodcut from "./pages/Prodcut";
import Sidbar from "./Components/Sidbar";
import Map from "./Components/Map";
import Layout from "./Components/Layout";
import City from "./Components/City";

function App() {
const list=[
  {
    id:1,
    name:"Tokyo",
    Country:"Japan"
  },
  {
    id:2,
    name:"Banglore",
    Country:"India"
  },
  {
    id:3,
    name:"Berlin",
    Country:"Germany"
  },
]
  const [city, setcity] = useState(list);
  const [loading, setloading] = useState(true);
  useEffect(function () {
    
    async function api() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags"
      );
      const data = await res.json();
    setcity(data)
    }
    api();
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="product" element={<Prodcut />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="layout" element={<Layout />}>
            <Route path="city" element={<City city={city}/>}></Route>
            <Route path="country" element={<City city={city}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
