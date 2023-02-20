import { Circle, Trash, CheckCircle } from "phosphor-react";
import check from "../assets/check.svg";
import styles from "./Task.module.css";

interface TaskProps {
  id: number;
  content: string;
  onDeleteTask: (content: number) => void;
  onCompleteTask: (content: number) => void;
  completed: boolean;
}

export function Task({
  content,
  id,
  completed,
  onDeleteTask,
  onCompleteTask,
}: TaskProps) {
  function handleDeleteComment(id: number) {
    onDeleteTask(id);
  }

  function handleCompleteTask(id: number) {
    onCompleteTask(id);
  }

  return (
    <div className={styles.taskContainer}>
      <div>
        {completed ? (
          <div className={styles.circle}>
            <button onClick={() => handleCompleteTask(id)}>
              <Circle size={20} />
            </button>
          </div>
        ) : (
          <div className={styles.check}>
            <button onClick={() => handleCompleteTask(id)}>
              <CheckCircle color="#fff" size={20} />
            </button>
          </div>
        )}
      </div>
      <div
        className={`${
          completed ? styles.description : styles.descriptionTaskCompleted
        }`}
      >
        {content}
      </div>
      <div className={styles.trash}>
        <button onClick={() => handleDeleteComment(id)}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
