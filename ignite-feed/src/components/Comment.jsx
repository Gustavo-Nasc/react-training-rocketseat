import styles from "./Comment.module.css"

import { Avatar } from "./Avatar"

import { Trash, ThumbsUp } from "phosphor-react"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/FernandaSena07.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernanda Sena</strong>
              <time
                title="16 de Fevereiro às 14h10min"
                dateTime="2024-02-16 14:10:23"
              >
                  Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, Jecília, parabéns! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>    
  )
}