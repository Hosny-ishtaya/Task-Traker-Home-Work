'use client'
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const NotFound = () => {
  const router = useRouter(); 

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>Oops! Page not found.</p>
      <button onClick={() => router.push("/")} className={styles.button}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;