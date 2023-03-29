import styles from './LearnWhat.module.css'

export default function LearnWhat() {
    return(
        <>
            <div className={styles.btn}>
                <div className={styles.btn__primary}>These little buzzers <br/> need your help!!!</div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
