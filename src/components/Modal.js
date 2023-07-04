import React from "react";

const Modal = ({ taskID }) => {
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
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter Changes in Task"
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <button type="button" className="btn btn-primary w-100">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
