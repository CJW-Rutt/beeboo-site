import styles from "./LearnCard01.module.css"

export default function LearnCard01() {
    return(
        <>
            <div className={styles.card}>
                <div className={styles.card__primary}>These little buzzers need your help!!!</div>
                <div className={styles.card__background}></div>
            </div>
        </>
    )
}