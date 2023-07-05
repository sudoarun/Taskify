import React, { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import ref from "../service/collectionRef";

const BottomNav = ({ setAlert }) => {
  const [value, setValue] = useState("");
  const createTask = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Enter Task Before Submit");
      return;
    }
    addDoc(ref, {
      todo: value,
      complete: false,
      time: serverTimestamp(),
    })
      .then(setAlert(true))
      .catch((err) => console.log(err));
    setValue("");
    setTimeout(() => setAlert(false), 1000);
  };
  return (
    <div className="container">
      <form onSubmit={createTask}>
        <div className="rounded d-flex py-3 px-2 shadow-4">
          <input
            type="text"
            id="bottomInput"
            placeholder="Add Task"
            className="form-control border-0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            className="material-icons-outlined bg-success text-white border-0 py-2 px-2 rounded-circle"
            type="submit"
          >
            add_circle
          </button>
        </div>
      </form>
    </div>
  );
};

export default BottomNav;
