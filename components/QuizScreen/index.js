import { useState } from 'react';
import Image from 'next/image';
import styles from "./Quiz.module.css"
import QuizCard01 from '../QuizCard01';
import TextBubble from '../TextBubble';
import Quiz from '../Quiz';

export default function QuizScreen({ image }) {
    const [isQuizVisible, setIsQuizVisible] = useState(false);

    const handleClose = () => {
        setIsQuizVisible(false);
    };

    const handleOpenQuiz = () => {
        setIsQuizVisible(true);
    };

  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.center}>
          <h1 className={styles.h1}>Buzzing for a challenge?</h1>
          <div className={styles.card} onClick={handleOpenQuiz}>
            <QuizCard01/>
            <Image
              className={styles.arrow}
              src="/ui-icons/arrow.svg"
              width={70}
              height={60}
            />
          </div>
        </div>
      </div>
      {isQuizVisible && (
        <TextBubble onClose={handleClose}>
            <Quiz onClose={handleClose} />
        </TextBubble>
      )}
    </>
  );
}