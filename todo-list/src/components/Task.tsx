import { Trash } from 'phosphor-react'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import styles from './Task.module.css'
import { useState } from 'react'

export interface TaskInfo {
  id: string
  checked?: boolean
  content: string
}

interface TaskProps {
  task: TaskInfo
  onCheckTask: (task: TaskInfo) => void
  onDeleteTask: (task: TaskInfo) => void
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  const [updatedTask, setUpdatedTask] = useState<TaskInfo>(task)

  function changeChecked() {
    setUpdatedTask({
      id: updatedTask.id,
      content: updatedTask.content,
      checked: !updatedTask.checked,
    })
    onCheckTask(updatedTask)
  }

  function handleDeleteTask() {
    onDeleteTask(updatedTask)
  }

  return (
    <article className={styles.task} id={task.id}>
      <div onClick={changeChecked}>
        <Checkbox
          checked={updatedTask.checked}
          onChangeChecked={changeChecked}
        />
        <p
          className={`${styles.content}${updatedTask.checked ? ' ' + styles.contentChecked : ''}`}
        >
          {task.content}
        </p>
      </div>
      <Button buttonStyle="delete" onClick={handleDeleteTask}>
        <Trash size={18} />
      </Button>
    </article>
  )
}
