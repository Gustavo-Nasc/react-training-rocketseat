import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle, ClipboardText } from 'phosphor-react'
import { Task, TaskInfo } from './components/Task'
import { v4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState<TaskInfo[]>([])
  const [concludedTasksCount, setConcludedTasksCount] = useState(0)
  const [newTask, setNewTask] = useState('')

  function handleOnChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, { id: v4(), content: newTask, checked: false }])
  }

  function changeCheckedTask(task: TaskInfo) {
    if (task.checked) setConcludedTasksCount(concludedTasksCount - 1)
    else setConcludedTasksCount(concludedTasksCount + 1)
  }

  function deleteTask(taskToDelete: TaskInfo) {
    setTasks((prev) => {
      return prev.filter((task) => task !== taskToDelete)
    })
  }

  function focusInput() {
    document.getElementById('task')?.focus()
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Insira a tarefa')
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <form onSubmit={handleSubmitTask} className={styles.form}>
          <Input
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
            name="task"
            id="task"
            value={newTask}
            onChange={handleOnChangeNewTask}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <Button type="submit">
            Criar
            <PlusCircle weight="bold" size={16} />
          </Button>
        </form>
        <div className={styles.tasksCount}>
          <div>
            Tarefas Criadas <strong>{tasks.length}</strong>
          </div>
          <div>
            Concluídas <strong>{concludedTasksCount} de {tasks.length}</strong>
          </div>
        </div>
        <section className={styles.tasks}>
          {tasks.length === 0 ? (
            <div className={styles.anyTask} onClick={focusInput}>
              <ClipboardText size={56} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onCheckTask={changeCheckedTask}
                onDeleteTask={deleteTask}
              />
            ))
          )}
        </section>
      </main>
    </div>
  )
}

export default App
