import React, { useState } from "react";
import BottomNav from "./BottomNav";
import Tasks from "./Tasks";
import Navbar from "./Navbar";
import Alert from "./Alert";

const Home = () => {
  const [alert, setAlert] = useState(false); // Notification
  const [alertdanger, setAlertdanger] = useState(false); // Delete Notification same component

  return (
    <div className=" vh-100">
      <div className="pb-2">
        <Navbar />
        {alert ? <Alert alertdanger={alertdanger} /> : ""}
      </div>
      <div className="">
        <Tasks
          setAlert={setAlert}
          setAlertdanger={setAlertdanger}
          alertdanger={alertdanger}
        />
      </div>
      <div className="py-2 fixed-bottom mb-2">
        <BottomNav setAlert={setAlert} />
      </div>
    </div>
  );
};

export default Home;
