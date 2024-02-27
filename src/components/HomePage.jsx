import React from "react";
import Exchanges from "./Exchanges";
import HomePageContent from "./HomePageContent";
import HomeChooseUs from "./HomeChooseUs";
import Footer from "./Footer";
import HomeJoin from "./HomeJoin";

const HomePage = () => {
  return (
    <div className="py-6">
      <HomePageContent />
      <Exchanges />
      <HomeChooseUs />
      <HomeJoin />
      <Footer />
    </div>
  );
};

export default HomePage;
