import styles from './Post.module.css'

import { Comment } from "./Comment.jsx"
import { Avatar } from './Avatar.jsx'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/Jecilia.png" />
          <div className={styles.authorInfo}>
            <strong>Jecília Teixeira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="15 de Fevereiro às 18h37min"
          dateTime="2024-02-15 18:37:43"
        >
            Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="https://github.com/Jecilia/DoctorCare">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form action="#" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixa um comentário" />

        <footer>
          <button>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}