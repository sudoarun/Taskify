import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ref from "../service/collectionRef";
import db from "../firebase";
import Modal from "./Modal";

const Tasks = () => {
  const [tasklist, setTaskList] = useState([]);
  const [taskID, setTaskID] = useState("");
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
    deleteDoc(delTask)
      .then(() => alert("Task Deleted"))
      .catch((err) => console.log(err));
  }
  function editNote(id) {
    setTaskID(id);
  }
  return (
    <div>
      <h5 className="text-center">Tasks Will Show Here</h5>
      <div className="container">
        {tasklist.map(({ id, data }, i) => (
          <div key={id} className="my-2">
            <div className="d-flex align-items-center justify-content-between">
              <span>{i + 1}</span>
              <span>{data.todo}</span>
              <div>
                <button
                  className="material-icons-outlined border-0 py-2 px-2 text-warning me-2"
                  data-mdb-toggle="modal"
                  data-mdb-target="#updateModal"
                  onClick={() => editNote(id)}
                >
                  edit_note
                </button>
                <button
                  type="button"
                  className="material-icons-outlined border-0 rounded py-2 px-2 text-danger"
                  onClick={() => deleteTask(id)}
                >
                  delete_outline
                </button>
              </div>
            </div>
            <Modal taskID={taskID} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
