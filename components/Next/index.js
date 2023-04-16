import styles from './Next.module.css';

export default function Next({ onClick }) {
    return (
        <>
            <div className={styles.btn} onClick={onClick}>
                <div className={styles.btn__arrow}></div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    );
}
