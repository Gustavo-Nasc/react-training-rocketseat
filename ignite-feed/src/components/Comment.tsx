import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'

import styles from './Comment.module.css'

import { Avatar } from './Avatar'

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Gustavo-Nasc.png" />

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>    
  )
}