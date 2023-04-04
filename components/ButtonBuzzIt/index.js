import styles from './ButtonBuzzIt.module.css'

export default function ButtonBuzzIt() {
    return(
        <>
            <div className={styles.btn}>
                <div className={styles.btn__primary}>ACTIVITIES AWAIT, BUZZ IT!!</div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
