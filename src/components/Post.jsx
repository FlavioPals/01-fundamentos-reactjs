import styles from './Post.module.css';
import {Comment} from './Comment'
import { Avatar } from './Avatar';
export function Post({author,publishedAt}){ {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto</a></p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
}