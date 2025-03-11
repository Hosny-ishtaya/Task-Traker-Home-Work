import Image from "next/image";
import CheckMarkImage from "@/Images/checkmark.png"
import ClockImage from "@/Images/clock.png"
import Link from "next/link";
import style from"./TaskItem.module.css"
import { Task } from "../type";

const TaskItem = ({tasks}:{tasks:Task}) => {
  return (
    <div className={style["task-item"]}>
      <h4>{tasks.id}</h4>  
      <Image
        src={tasks.completed ? CheckMarkImage : ClockImage}
        alt={tasks.completed ? "Completed" : "Pending"}
        width={24}
        height={24}
      />
      <Link href={`Task/${tasks.id}`} className="">
        {tasks.title}
      </Link>
    </div>
  );
};

export default TaskItem;