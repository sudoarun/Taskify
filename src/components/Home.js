import React from "react";
import BottomNav from "./BottomNav";
import Tasks from "./Tasks";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="d-flex justify-content-between flex-column vh-100">
      <div className="pb-2">
        <Navbar />
      </div>
      <div className=" overflow-auto" style={{ height: "75vh" }}>
        <Tasks />
      </div>
      <div className="py-2">
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
