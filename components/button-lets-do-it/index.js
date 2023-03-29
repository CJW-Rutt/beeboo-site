import styles from './ButtonLetsDoIt.module.css'

export default function ButtonLetsDoIt() {
    return(
        <>
            <div className={styles.btn}>
                <div className={styles.btn__primary}>LET'S DO IT!!</div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
