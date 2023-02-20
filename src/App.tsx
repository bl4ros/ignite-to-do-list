import { Header } from "./components/Header";
import styles from "./App.module.css";

import { PlusCircle } from "phosphor-react";
import { Task } from "./components/Task";

export function App() {
  return (
    <main>
      <div className={styles.wrapper}>
        <section>
          <Header />
        </section>
        <div className={styles.taskWrapper}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.button}>
              <span>Criar</span>
              <PlusCircle size={20} />
            </button>
          </div>
          <div className={styles.dashboardWrapper}>
            <div className={styles.blueColor}>
              Tarefas Criadas <span className={styles.dashboardValue}>5</span>
            </div>
            <div className={styles.purpleColor}>
              Concluídas <span className={styles.dashboardValue}>2 de 5</span>
            </div>
          </div>
        </div>

        <div className={styles.taskContainer}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </main>
  );
}
