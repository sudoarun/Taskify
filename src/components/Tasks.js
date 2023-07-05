import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ref from "../service/collectionRef";
import db from "../firebase";
import Modal from "./Modal";
import CheckBox from "./CheckBox";

const Tasks = ({ setAlert, setAlertdanger }) => {
  const [tasklist, setTaskList] = useState([]);
  const [taskID, setTaskID] = useState("");
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      setTaskList(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(tasklist);
  function deleteTask(id) {
    // alert(id);
    const delTask = doc(db, "taskify", id);
    deleteDoc(delTask).then(setAlert(true) || setAlertdanger(true));
    setTimeout(() => {
      setAlert(false);
      setAlertdanger(false);
    }, 1000);
  }
  function editNote(id) {
    setTaskID(id);
  }

  // console.log(tasklist);
  return (
    <div className="overflow-hidden" style={{ height: "70vh" }}>
      {tasklist.length === 0 ? (
        <h5 className="text-center mb-4">No Task Available !!</h5>
      ) : (
        <div className="container" style={{ height: "100%" }}>
          <h5 className="text-center mb-4">Your Task's</h5>
          <div
            className="bg-white overflow-auto p-3 rounded shadow-3"
            style={{ height: "100%" }}
          >
            {tasklist.map(({ id, data }, i) => (
              <div key={id} className="my-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <div className="me-2">
                      <CheckBox check={data.complete} />
                    </div>
                    <div>
                      <span>{data.todo}</span>
                    </div>
                  </div>

                  <button
                    className="material-icons-outlined border-0 bg-transparent"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    more_vert
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        data-mdb-toggle="modal"
                        data-mdb-target="#updateModal"
                        onClick={() => editNote(id)}
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => deleteTask(id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
                <Modal taskID={taskID} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
