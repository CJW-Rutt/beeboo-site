import styles from './Next.module.css'

export default function Next() {
    return(
        <>
            <div className={styles.btn}>
                <div className={styles.btn__arrow}></div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
