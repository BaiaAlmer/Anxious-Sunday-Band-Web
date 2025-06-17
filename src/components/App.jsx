import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Spotify from "./Spotify";
import Youtube from "./Youtube";

function App() {
  return (
    <div>
      <Header />
      <About/>
      <Spotify />
      <Youtube />
      <Footer />
    </div>
  );
}

export default App;
