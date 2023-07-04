import React, { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import ref from "../service/collectionRef";

const BottomNav = () => {
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
      .then(
        (response) =>
          console.log(response.id) || alert("New Task Added Successfully")
      )
      .catch((err) => console.log(err));
    setValue("");
  };
  return (
    <div className="container">
      <form onSubmit={createTask}>
        <div className="border rounded d-flex py-3 px-2">
          <input
            type="text"
            id="bottomInput"
            placeholder="Add Task"
            className="form-control border-0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            class="material-icons-outlined bg-success text-white border-0 py-2 px-2 rounded-circle"
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
