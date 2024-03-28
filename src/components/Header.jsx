import styles from "./Header.module.css"

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.linksContainer}>
                <a className={styles.links} href="#">Help</a>
                <a className={styles.links} href="#">Store locator</a>
                <a className={styles.links} href="#">English</a>
            </div>
        </header>
    )
}

export default Header