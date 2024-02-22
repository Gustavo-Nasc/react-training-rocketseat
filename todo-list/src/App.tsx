import { ChangeEvent, FormEvent, useState } from 'react'
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
  const [messageErrorVisibility, setMessageErrorVisibility] = useState(false)
  const [messageError, setMessageError] = useState('')

  function handleOnChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
    if (newTask.length < 1) {
      setMessageError('Insira a tarefa')
      setMessageErrorVisibility(true)
    } else {
      setMessageError('')
      setMessageErrorVisibility(false)
    }
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault()

    const taskAlreadyExists = tasks.some((task) => task.content === newTask)

    if (taskAlreadyExists) {
      setMessageError('Tarefa já existe')
      setMessageErrorVisibility(true)
    } else if (newTask.length < 1) {
      setMessageError('Insira a tarefa')
      setMessageErrorVisibility(true)
    } else {
      setTasks([...tasks, { id: v4(), content: newTask, checked: false }])
      setMessageErrorVisibility(false)
      setMessageError('')
      setNewTask('')
    }
  }

  function changeCheckedTask(task: TaskInfo) {
    if (task.checked) setConcludedTasksCount(concludedTasksCount - 1)
    else setConcludedTasksCount(concludedTasksCount + 1)
  }

  function deleteTask(taskToDelete: TaskInfo) {
    if (taskToDelete.checked) setConcludedTasksCount(concludedTasksCount - 1)

    setTasks((prev) => {
      return prev.filter((task) => task.id !== taskToDelete.id)
    })
  }

  function focusInput() {
    document.getElementById('task')?.focus()
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <form onSubmit={handleSubmitTask} className={styles.form}>
          <div>
            <Input
              className={styles.input}
              placeholder="Adicione uma nova tarefa"
              name="task"
              id="task"
              value={newTask}
              onChange={handleOnChangeNewTask}
            />
            <Button type="submit">
              Criar
              <PlusCircle weight="bold" size={16} />
            </Button>
          </div>
          {messageErrorVisibility && (
            <span className={styles.messageError}>{messageError}</span>
          )}
        </form>
        <div className={styles.tasksCount}>
          <div>
            Tarefas Criadas <strong>{tasks.length}</strong>
          </div>
          <div>
            Concluídas{' '}
            {tasks.length === 0 ? (
              <strong>{concludedTasksCount}</strong>
            ) : (
              <>
                <strong>
                  {concludedTasksCount} de {tasks.length}
                </strong>
              </>
            )}
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
                task={task}
                key={task.id}
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
