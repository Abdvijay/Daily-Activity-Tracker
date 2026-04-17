import { useEffect, useState, useCallback } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/Checklist.css";

function Checklist() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const user_id = localStorage.getItem("user_id");

  const loadTasks = useCallback(async () => {
    const res = await API.get(`tasks/get_tasks/?user_id=${user_id}`);
    setTasks(res.data);
  }, [user_id]);

  const addTask = async () => {
    await API.post("tasks/add_task/", {
      user_id,
      task_name: taskName
    });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`tasks/delete_task/${id}/`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <Navbar />
      <div className="checklist">
        <h2>Checklist</h2>

        <input onChange={(e) => setTaskName(e.target.value)} />
        <button onClick={addTask}>Add Task</button>

        {tasks.map((t) => (
          <div key={t.id}>
            <input type="checkbox" />
            {t.task_name}
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Checklist;