import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}></div>
                <img className={styles.avatar} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
                <div className={styles.authorInfo}>
                    <strong>Flavio Pals</strong>
                    <span>Web Developer</span>
                </div>
                <time dateTime=""></time>
            </header>
        </article>
    )
}