import { useState, useEffect } from 'react';
import styles from './Quiz.module.css';
import { quizData } from '../../data/quiz.js';
import QuizButton from '../QuizButton';

export default function Quiz() {
  const [currentPage, setCurrentPage] = useState('quiz-page-one');
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
  };

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setCurrentPage('quiz-page-two');
        setFadeOut(false);
      }, 500);
    }
  }, [fadeOut]);

  return (
    <>
      <div className={styles.quizStyle}>
        {quizData[currentPage].map((item, index) => {
          const answerKey = Object.keys(item)[0];
          const src = item.src;

          return (
            <QuizButton
              key={index}
              answer={item[answerKey]}
              src={src}
              onClick={handleClick}
              fadeOut={fadeOut}
            />
          );
        })}
      </div>
    </>
  );
}
