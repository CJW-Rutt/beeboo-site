import styles from './ButtonPrimary.module.css'

export default function ButtonPrimary() {
    return(
        <>
            <div className={styles.btn}>
                <div className={styles.btn__primary}>Click Me!</div>
                <div className={styles.btn__background}>Click Me!</div>
            </div>
        </>
    )
}
