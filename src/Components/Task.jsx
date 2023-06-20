import React from 'react'

const Task = ({title,discription,index,delfunc}) => {
  
   
  
  return (
    <div className="task">
    <div>
        <p>{title}</p>
        <span>{discription}</span>
    </div>
    <button onClick= {()=>{
      delfunc(index);
    }}>x</button>
    </div>
  )
}

export default Task;