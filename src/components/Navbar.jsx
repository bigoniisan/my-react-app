import styles from "./Navbar.module.css"

function Navbar() {

    return (
        <nav className={styles.nav}>
            <div className={styles.leftSide}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="#" alt="logo" />
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.category}>WOMEN</div>
                    <div className={styles.category}>MEN</div>
                    <div className={styles.category}>KIDS</div>
                    <div className={styles.category}>BABY</div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.buttonContainer}>
                    <button className={styles.userButton}>SEARCH</button>
                    <button className={styles.userButton}>MY ACCOUNT</button>
                    <button className={styles.userButton}>WISHLIST</button>
                    <button className={styles.userButton}>CART</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar