import React from "react";
// import Footer from "./component/footer";
// import NavBar from "./component/navBar";
// import Hero from "./component/Hero";

import {
  Hero,
  NavBar,
  Footer,
  Memory,
  Explore,
  Advertise,
  Pricing,
  Banner,
  NewsLetter,
} from "./component";

import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./data/travigodata";

const App = () => {
  return (
    <div>
      <NavBar key={navlinks.id} navlinks={navlinks} />
      <Hero key={Hero.id} Hero={hero} />
      <Memory key={memory.id} memory={memory} />
      <Explore
        key={placesAPI.id}
        title="Explore the beauty of the world"
        placesAPI={placesAPI}
      />
      <Advertise key={brands.id} brands={brands} />
      <Pricing key={pricingapi.id} pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <NewsLetter />
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
