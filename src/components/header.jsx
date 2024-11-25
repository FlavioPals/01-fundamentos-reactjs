import styles from './header.module.css'

console.log(styles)
export function Header() {
    return(
        <strong className={styles.header}>Ignite Feed</strong>
    )
}