import styles from './Previous.module.css'

export default function Previous({ onClick }) {
    return(
        <>
            <div className={styles.btn} onClick={onClick}>
                <div className={styles.btn__arrow}></div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
