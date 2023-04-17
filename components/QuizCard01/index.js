import styles from "./QuizCard01.module.css"

export default function QuizCard01() {
    return(
        <>
            <div className={styles.card}>
                <div className={styles.card__primary}>Help Bea to find a nice place for our little pollinators!</div>
                <div className={styles.card__background}></div>
            </div>
        </>
    )
}