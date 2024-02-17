import PropTypes from 'prop-types'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import styles from './Post.module.css'

import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar.jsx'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH'h'mm'min'",
    { locale: ptBR }
  )

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function handleNewCommentText() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtFormatted}
          dateTime={publishedAt.toISOString()}
        >
            {publishedAtRelativeToNow.charAt(0).toUpperCase() + publishedAtRelativeToNow.substring(1)}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href={line.url}>{line.content}</a></p>
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixa um comentário"
          value={newCommentText}
          onChange={handleNewCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                deleteComment={deleteComment}
              />
            )
          })}
        </div>
      </article>
    )
}

Post.propTypes = {
  author: PropTypes.object.isRequired,
  publishedAt: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
}