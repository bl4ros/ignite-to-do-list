import { Header } from "./components/Header";
import styles from "./App.module.css";

import { Task } from "./components/Task";
import React from "react";
import { TaskWrapperController } from "./components/TaskWrapperController";
import { NotTask } from "./components/NotTask";

export interface TaskContentProps {
  id: number;
  task_content: string;
  complete: boolean;
}

export function App() {
  const [tasks, setTasks] = React.useState<TaskContentProps[]>([]);
  const [newTaskText, setNewTaskText] = React.useState({
    id: new Date().getTime(),
    task_content: "",
    complete: false,
  });

  const temp_Id = new Date().getTime();

  function handleNewTaskContent(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTaskText({
      id: temp_Id,
      task_content: event.target.value,
      complete: false,
    });
  }

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText({
      id: 0,
      task_content: "",
      complete: false,
    });
  }

  function handleDeleteTask(taskToDelete: number) {
    const taskWithoutDeletedOne = tasks.filter(
      (taskCandidate) => taskToDelete !== taskCandidate.id
    );

    setTasks(taskWithoutDeletedOne);
  }

  function handleCompleteTask(taskToComplete: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskToComplete) {
          return {
            ...task,
            complete: !task.complete,
          };
        }
        return task;
      })
    );
  }

  const howToTaskCompleted = tasks.filter((task) => {
    return task.complete;
  });

  return (
    <main>
      <div className={styles.wrapper}>
        <section>
          <Header />
        </section>
        <form onSubmit={handleCreateNewComment}>
          <TaskWrapperController
            content={newTaskText.task_content}
            amoutTask={howToTaskCompleted}
            onNewTaskContent={handleNewTaskContent}
            tasks={tasks}
          />
        </form>

        <div className={styles.taskContainer}>
          {tasks.length === 0 ? (
            <NotTask />
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  id={task.id}
                  content={task.task_content}
                  key={task.id}
                  onDeleteTask={handleDeleteTask}
                  onCompleteTask={handleCompleteTask}
                  completed={!task.complete}
                />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
