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
    <div>
      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Add Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default BottomNav;
