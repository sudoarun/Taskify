import React from "react";

const Alert = () => {
  return (
    <div className="position-absolute w-75 w-sm-25 end-0">
      <div
        className="p-3 text-white rounded mx-2"
        style={{ background: "#539165", opacity: "0.9" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Data Saved Successfully !!!</span>
          <span class="material-icons-outlined">close</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
