import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ref from "../service/collectionRef";

const Tasks = () => {
  const [tasklist, setTaskList] = useState([]);
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
  console.log(tasklist);
  return (
    <div>
      <h5>Tasks Will SHow Here</h5>
      <div>
        {tasklist.map(({ id, data }) => (
          <li key={id}>{data.todo}</li>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
