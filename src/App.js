import React, { useState } from 'react';
import './App.css';
import Modal from './components/modal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  const addTask = () => {
    if (newTask.trim() !== '' && title.trim() !== '') {
      const taskObject = {
        title,
        date,
        month,
        year,
        description,
        task: newTask,
      };
      setTasks([...tasks, taskObject]);
      setNewTask('');
      setTitle('');
      setDate('');
      setMonth('');
      setYear('');
      setDescription('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
  
    <div className="my-todo-App">
      <h1>my-todo-App</h1>
      <div>
        <button onClick={closeModal}>Close Modal</button>
        <button onClick={()=>openModal()}>openModal</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
        
             <strong>{task.title}</strong>
             <br />
             {`Date: ${task.date}, Month: ${task.month}, Year: ${task.year}`}
             <br />
             {`Description: ${task.description}`}
             <br />
             {task.task}
            <button onClick={() => openModal(task)}>Open Modal</button>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {showModal && <Modal closeModal={closeModal} task={selectedTask} />}
    </div>
  
  )
        };

export default App;