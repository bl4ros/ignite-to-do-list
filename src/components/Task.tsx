import { Circle, Trash } from "phosphor-react";
import check from "../assets/check.svg";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.circle}>
        <button>
          <Circle size={20} />
        </button>
      </div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>
      <div className={styles.trash}>
        <button>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
