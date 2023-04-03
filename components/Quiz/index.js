import { useState, useEffect } from 'react';
import styles from './Quiz.module.css';
import { quizData } from '../../data/quiz.js';
import QuizButton from '../QuizButton';

export default function Quiz() {
  const [currentPage, setCurrentPage] = useState('quiz-page-one');
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      if (currentPage === 'quiz-page-one') {
        setCurrentPage('quiz-page-two');
      } else if (currentPage === 'quiz-page-two') {
        setCurrentPage('quiz-page-three');
      }
      setFadeOut(false);
    }, 500); 
  };

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
