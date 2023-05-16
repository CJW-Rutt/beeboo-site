import Image from 'next/image'
import styles from './QuizButton.module.css';

export default function QuizButton ({ answer, src, onClick, fadeOut }) {
    const buttonClass = fadeOut ? 'fadeOut' : '';

    return (
        <div onClick={onClick} className={styles.quizButton}>
            <div className={styles.quizButtonPrimary}>
                <Image src={src} height={50} width={50} alt="image" />
                <div className={styles.answerText}>{answer}</div>        
            </div>
            <div className={styles.quizButtonBackground} />
        </div>
    );
};

