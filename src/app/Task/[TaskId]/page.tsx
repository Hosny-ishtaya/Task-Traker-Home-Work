"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Page.module.css";
import CheckMarkImage from "@/Images/checkmark.png";
import ClockImage from "@/Images/clock.png";
import BackIcon from "@/Images/backhome.png";
import { useRouter } from "next/navigation";
import { Task } from "@/app/type";

const TaskDetails = () => {
  const { TaskId } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${TaskId}`
        );
        if (!res.ok) {
            router.push("/NotFoundPage")
            throw new Error("Failed to fetch task");
            
        }
        const data = await res.json();
        setTask(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchTaskDetails();
  }, [TaskId,router]);

  if (!task) {
    return <p className={styles.container}>Task not found.</p>;
  }

  const backToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Task Details</h1>
        <Image
          src={BackIcon}
          alt="back icon"
          width={24}
          height={24}
          onClick={backToHome}
        />
      </div>

      <div className={styles.taskDetails}>
        <p>ID: {task.id}</p>
        <div className={styles.taskTitle}>
          <Image
            src={task.completed ? CheckMarkImage : ClockImage}
            alt="Task Status"
            width={24}
            height={24}
          />
          <p>{task.title}</p>
        </div>
        <p className={task.completed ? styles.completed : styles.pending}>
          Status: {task.completed ? "Completed ✅" : "Pending ⏳"}
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
