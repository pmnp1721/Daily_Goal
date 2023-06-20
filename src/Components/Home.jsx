import React,{useState,useEffect} from 'react';
import Task from "./Task";
const Home =()=>{
   const incompleteTask= localStorage.getItem("task")
  ?JSON.parse(localStorage.getItem("task")):[];
   console.log(incompleteTask);
  const [task,setTask]=useState(incompleteTask);
  const [titel,setTitel]=useState("");
  const [discription,setDiscription]=useState("");

  const sumith=(e)=>{
    e.preventDefault();
    
    if(titel!=="" || discription!==""){
    setTask([...task,{titel,discription} ]);
    }
    else{
      alert("Enter Task Titel and Discription");
    }
    setTitel("");
    setDiscription("");
   };

   
  
  
  const deletTask=(ind)=>{
    const newTask=task.filter((val, i)=>{
       return i!==ind;
    });
    setTask(newTask);
  }

   useEffect(() => {
    
     localStorage.setItem("task",JSON.stringify(task));
  
  }, [task])
  return(
    <div className="container">
      <form onSubmit={sumith} >
      <h1>DAILY GOALS</h1>
        <input type="text" placeholder="Title" value={titel} onChange={(e)=>
        
          setTitel(e.target.value)
          }
        />
        <textarea placeholder="Discription" 
        value={discription} onChange={(e)=>
          setDiscription(e.target.value)}></textarea>
        <button type="submit">ADD</button>
      </form>
    
   {  task.map((val,ind)=>(
      <Task key={ind} 
      title={val.titel} 
      discription={val.discription}
        index={ind}
        delfunc={deletTask}
      />
     )) }
    </div>
   
  )
}
export default Home;