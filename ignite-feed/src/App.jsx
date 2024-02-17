import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// author: { avatar_url: string, nome: string, role: string }
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Jecilia.png',
      name: 'Jecília Teixeira',
      role: 'Web Developer'
    },
    publishedAt: new Date('2024-02-17 09:40:36'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'Jecilia | DoctorCare by Rocketseat', url: 'https://github.com/Jecilia/DoctorCare' }
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/FernandaSena07.png',
      name: 'Fernanda Sena',
      role: 'Web Developer'
    },
    publishedAt: new Date('2024-02-17 09:47:27'),
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      { type: 'paragraph', content: 'Acesse e deixe seu feedback:' },
      { type: 'link', content: 'Fernanda Sena | Portfólio', url: 'https://fernandasena07.github.io/Portifolio-FernandaSena/' }
    ],
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>sidebar</Sidebar>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
