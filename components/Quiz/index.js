import { useState, useEffect } from 'react';
import styles from './Quiz.module.css';
import { quizButtons } from '../../data/quiz.js';
import { quizQuestions } from '../../data/quiz.js';
import QuizButton from '../QuizButton';

export default function Quiz() {
  const [currentPage, setCurrentPage] = useState('quizPageOne');
  const [currentPageQuestion, setCurrentPageQuestion] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      if (currentPage === 'quizPageOne') {
        setCurrentPage('quizPageTwo');
      } else if (currentPage === 'quizPageTwo') {
        setCurrentPage('quizPageThree');
      }
      setFadeOut(false);
    }, 500); 
  };

  const currentQuestion = quizQuestions[currentPage][currentPageQuestion];

  return (
    <>
      <div className={styles.quizStyle}>
        <div className={styles.quizQuestion}>
          <h1>{currentQuestion.h1}</h1>
          <p>{currentQuestion['1']}</p>
          <p>{currentQuestion['2']}</p>
          <p>{currentQuestion['3']}</p>
        </div>
        <div className={styles.quizQuestionContainer}>
          {quizButtons[currentPage].map((item, index) => {
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
      </div>  
    </>
  );
}
