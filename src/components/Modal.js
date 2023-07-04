import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase";

const Modal = ({ taskID }) => {
  const [update, setUpdate] = useState("");
  function UpdateForm(e) {
    e.preventDefault();
    if (update === "") {
      alert("Enter Text");
      return;
    }
    const updateref = doc(db, "taskify", taskID);
    updateDoc(updateref, {
      todo: update,
    })
      .then(() => alert("Task Updated"))
      .catch((err) => console.log(err.message));
    setUpdate("");
  }
  return (
    <div
      className="modal fade"
      id="updateModal"
      tabIndex="-1"
      aria-labelledby="updateModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateModal">
              Update Task
            </h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-between">
              <span>Task ID : </span>
              <span>{taskID}</span>
            </div>
            <form className="mt-2" onSubmit={UpdateForm}>
              <input
                type="text"
                placeholder="Enter Changes in Task"
                className="form-control"
                value={update}
                onChange={(e) => setUpdate(e.target.value)}
              />
              <div className="mt-3">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
