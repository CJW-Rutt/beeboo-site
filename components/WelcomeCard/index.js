import styles from "./WelcomeCard.module.css"

export default function WelcomeCard() {
    return(
        <>
            <div className={styles.card}>
                <div className={styles.card__primary}>Bee-lieve it or not, there's so much to discover about bees! Join the hive and find out this amazing world!</div>
                <div className={styles.card__background}></div>
            </div>
        </>
    )
}