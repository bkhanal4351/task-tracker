import { useState } from 'react'

const Tasks = () =>{
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





  return (
    <>
    {tasks.map((tasks)=> (<h3 key={tasks.id}>{tasks.text}  {tasks.day}  </h3> ))}
    </>
  )
}

export default Tasks