import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks';

const App = () =>{
  const [tasks, setTasks] = useState([
    
      {
        id: 1,
        text: 'Doctors Appt',
        day: '1st of feb',
        remider: true,
      },
      
      {
        id: 2,
        text: 'Interview Appt',
        day: '26th of Sept 2022',
        remider: true,
      }
        
      

  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id!==id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
  }


  return (
    <>
    <div className="container">
      <Header/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      ) : ('No Tasks')}
    </div>
    </>
  );
}

export default App;
