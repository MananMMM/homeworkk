import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";

export default function Home() {
  const items = getAllCourses()
  return (
    <main className={styles.main}>
      </main>
  );
}
