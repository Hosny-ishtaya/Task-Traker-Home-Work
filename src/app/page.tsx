import TaskItem from "./components/TaskItem";
import styles from "./page.module.css";
import { Task } from "./type";

const  fetchTasks= async (): Promise<Task[]> =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

 const  Home= async ()=> {

  const Tasks = await fetchTasks();

  return (
    <div className={styles.container}>
      <h1>Task Tracker</h1>
      {
        Tasks.map((key)=>{
          return <TaskItem key={key.id} tasks={key}/>
        })
      }
    </div>
  );
}

export default Home;
