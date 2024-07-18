import "./App.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";

import Test3 from "./components/Test3";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };
  fetchTasks();

  //fetch single task
  const fetchSingleTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    console.log("delete", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // to toggle remonder tru or false

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchSingleTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
    console.log(task);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task }; //create a new task and embed the id with it
    // setTasks([...tasks, newTask]); //take the tasks and embed new task in that array
  };

  return (
    <Router>
      <div className="container">
        <Link to="/">Home</Link> |<Link to="/contact">Contact</Link>|
        <Link to="/about">About</Link>
        <Header
          title="Task Tracker!"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}

                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to show"
                )}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
