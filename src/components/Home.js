import React from "react";
import BottomNav from "./BottomNav";
import Tasks from "./Tasks";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Tasks />
      <BottomNav />
    </div>
  );
};

export default Home;
