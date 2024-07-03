import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [inputVal, setInputVal] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [btnName, setBtnName] = useState("Add");

  const handleAddTask = () => {
    if (editTask != null) {
      const updateTask = [...inputVal];
      updateTask[editTask] = task;
      setInputVal(updateTask);
      setEditTask(null);
      setTask("");
      setBtnName("Add");
    } else {
      setInputVal([...inputVal, task]);
      setTask("");
    }
  };
  const handleDeleteTask = (id) => {
    const deleteTask = [...inputVal];
    deleteTask.splice(id, 1);
    setInputVal(deleteTask);
  };
  const handleEditTask = (id) => {
    setEditTask(id);
    setTask(inputVal[id]);
    setBtnName("Edit");
  };

  return (
    <div>
      <input onChange={(e) => setTask(e.target.value)} value={task} />
      <button onClick={handleAddTask}>{btnName}</button>
      <div>
        {inputVal.map((task, id) => (
          <ul key={id}>
            <li>
              {task}

              <button onClick={() => handleDeleteTask(id)}>Delete</button>

              <button onClick={() => handleEditTask(id)}>Edit</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todo;
