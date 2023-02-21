import clipboard from "../assets/clipboard.svg";
import styles from "./NotTask.module.css";

export function NotTask() {
  return (
    <div className={styles.notTask}>
      <div>
        <img src={clipboard} alt="" />
      </div>
      <div>
        <div>
          <b>Você ainda não tem tarefas cadastradas</b>
        </div>
        <div>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </div>
  );
}
