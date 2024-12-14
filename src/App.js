import React from "react";
import Hero from "./componenets/hero/Hero";
import Navbar from "./componenets/navbar/Navbar";
import Data from "./componenets/data/Data";
import Cloud from "./componenets/cloud/Cloud";
import Footer from "./componenets/footer/Footer";

function App() {
  return (
    <>
   <Navbar/>
   <Hero />
   <Data />
   <Cloud />
   <Footer />
    </>
  );
}

export default App;
