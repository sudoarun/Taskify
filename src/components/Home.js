import React, { useState } from "react";
import BottomNav from "./BottomNav";
import Tasks from "./Tasks";
import Navbar from "./Navbar";
import Alert from "./Alert";

const Home = () => {
  const [alert, setAlert] = useState(false);
  const [alertdanger, setAlertdanger] = useState(false);

  return (
    <div className="d-flex justify-content-between flex-column vh-100">
      <div className="pb-2">
        <Navbar />
        {alert ? <Alert alertdanger={alertdanger} /> : ""}
      </div>
      <div className=" overflow-auto" style={{ height: "75vh" }}>
        <Tasks
          setAlert={setAlert}
          setAlertdanger={setAlertdanger}
          alertdanger={alertdanger}
        />
      </div>
      <div className="py-2">
        <BottomNav setAlert={setAlert} />
      </div>
    </div>
  );
};

export default Home;
