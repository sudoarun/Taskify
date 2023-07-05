import React from "react";

const Alert = ({ alertdanger }) => {
  return (
    <div className="position-absolute w-75 w-sm-25 end-0">
      {alertdanger ? (
        <div
          className="p-3 text-white rounded mx-2"
          style={{ background: "#B31312", opacity: "0.9" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span>Task Deleted!</span>
            <span className="material-icons-outlined">close</span>
          </div>
        </div>
      ) : (
        <div
          className="p-3 text-white rounded mx-2"
          style={{ background: "#539165", opacity: "0.9" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span>Task Created !!!</span>
            <span className="material-icons-outlined">close</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
