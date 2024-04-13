import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import PromotionalHeader from "./Components/PromotionalHeader";
import Banner from "./Components/Banner";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [hidePromo, setHidePromo] = useState(true);

  return (
    <div className="App">
      {hidePromo && (
        <PromotionalHeader hidePromo={hidePromo} setHidePromo={setHidePromo} />
      )}
      <Header />
      <Banner />
    </div>
  );
}

function Root() {
  return (
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  );
}

export default Root;
