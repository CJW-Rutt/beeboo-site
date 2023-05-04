import styles from './Close.module.css'

export default function Close({ onClick, onToggleNavElements }) {
    const handleClick = () => {
        onClick();
        onToggleNavElements(true);
    };

    return (
        <>
            <div className={styles.btn} onClick={handleClick}>
                <div className={styles.btn__arrow}></div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    );
}