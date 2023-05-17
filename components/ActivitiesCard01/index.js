import styles from "./ActivitiesCard01.module.css"

export default function ActivitiesCard01() {
    return(
        <>
            <div className={styles.card}>
                <div className={styles.card__primary}>Let's put into practice everything we've learned! Check the fun activities we've prepared for you!</div>
                <div className={styles.card__background}> <br/> <br/> <br/> </div>
            </div>
        </>
    )
}