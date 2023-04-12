import styles from "./IntroCard01.module.css"

export default function IntroCard01() {
    return(
        <>
            <div className={styles.card}>
                <div className={styles.card__primary}>Join the mission to protect our buzzing friends and learn all about why they're so important to our environment!</div>
                <div className={styles.card__background}></div>
            </div>
        </>
    )
}