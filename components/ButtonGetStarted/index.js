import styles from './ButtonGetStarted.module.css'

export default function ButtonGetStarted() {
    return(
        <>
            <div className={styles.btn}>
                <div className={styles.btn__primary}>GET STARTED!</div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
