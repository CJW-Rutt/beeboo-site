import styles from './Close.module.css'

export default function Close() {
    return(
        <>
            <div className={styles.btn}>
                <div className={styles.btn__arrow}></div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
