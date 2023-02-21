import { PlusCircle } from "phosphor-react";
import { ChangeEvent } from "react";
import { TaskContentProps } from "../App";
import styles from "./TaskWrapperController.module.css";

interface TaskWrapperControllerProps {
  content: string;
  tasks: TaskContentProps[];
  amoutTask: TaskContentProps[];
  onNewTaskContent: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TaskWrapperController({
  content,
  tasks,
  amoutTask,
  onNewTaskContent,
}: TaskWrapperControllerProps) {
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={content}
          placeholder="Adicione uma nova tarefa"
          onChange={onNewTaskContent}
        />
        <button type="submit" className={styles.button}>
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </div>
      <div className={styles.dashboardWrapper}>
        <div className={styles.blueColor}>
          Tarefas Criadas:
          <span className={styles.dashboardValue}>{tasks.length}</span>
        </div>
        <div className={styles.purpleColor}>
          Concluídas:
          <span className={styles.dashboardValue}>
            {amoutTask.length} de {tasks.length}
          </span>
        </div>
      </div>
    </div>
  );
}
