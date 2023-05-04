import styles from './ButtonGetStarted.module.css'

export default function ButtonGetStarted({ onClick }) {
    return(
        <>
            <div className={styles.btn} onClick={onClick}>
                <div className={styles.btn__primary}>GET STARTED!</div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
