import React from "react";
import { Loader } from "../Components/Loader";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="navbar">
        {" "}
        <Loader></Loader>
      </div>
      <div className="landing"> 
        <h1>Keep a Track of Your Journey </h1>
        <h2>Around the World With  <span>World Map</span></h2>

      <Link to="Layout">
       <button>Start</button>
      </Link>
      </div>
     
    </>
  );
}

export default Home;
