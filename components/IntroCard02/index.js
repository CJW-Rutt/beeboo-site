import styles from "./IntroCard02.module.css"

export default function IntroCard02() {
    return(
        <>
            <div className={styles.card}>
                <div className={styles.card__primary}> With your help, we can make the world a better place!</div>
                <div className={styles.card__background}></div>
            </div>
        </>
    )
}