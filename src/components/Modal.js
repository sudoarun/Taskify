import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase";
import CheckBox from "./CheckBox";

const Modal = ({ taskID, setAlert }) => {
  const [update, setUpdate] = useState("");
  const [isdone, setDone] = useState(false);
  function UpdateForm(e) {
    e.preventDefault();
    const updateref = doc(db, "taskify", taskID);
    if (update === "") {
      updateDoc(updateref, {
        complete: isdone,
      })
        .then(setAlert(true))
        .catch((err) => console.log(err.message));
      setUpdate("");
      setDone(false);
      setTimeout(() => {
        setAlert(false);
      }, 1000);
      return;
    }

    updateDoc(updateref, {
      todo: update,
      complete: isdone,
    })
      .then(setAlert(true))
      .catch((err) => console.log(err.message));
    setUpdate("");
    setDone(false);
    setTimeout(() => {
      setAlert(false);
    }, 1000);
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
            <div className="row">
              <div className="col-6">
                <span>Task ID : </span>
              </div>
              <div className="col-6">
                <span>{taskID}</span>
              </div>
              <div className="col-6">
                <span>Task Completed ? :</span>
              </div>
              <div className="col-6">
                <CheckBox check={isdone} oncheck={() => setDone(!isdone)} />
              </div>
            </div>
            <form className="mt-2" onSubmit={UpdateForm}>
              <input
                type="text"
                placeholder="Enter Changes in Task if Any ?"
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
