import { useState } from 'react';
import styles from './Quiz.module.css';
import { quizButtons } from '../../data/quiz.js';
import { quizQuestions } from '../../data/quiz.js';
import QuizButton from '../QuizButton';

export default function Quiz() {
  const [currentPage, setCurrentPage] = useState('quizPageOne');
  const [fadeOut, setFadeOut] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [resultPage, setResultPage] = useState(null);

  const handleClick = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
    setFadeOut(true);
    setTimeout(() => {
      if (currentPage === 'landingPage') {
        setCurrentPage('quizPageOne');
      } else if (currentPage === 'quizPageOne') {
        setCurrentPage('quizPageTwo');
      } else if (currentPage === 'quizPageTwo') {
        setCurrentPage('quizPageThree');
      } else if (currentPage === 'quizPageThree') {
        determineResultPage();
      }
      setFadeOut(false);
    }, 500);
  };

  const handleIntroButtonClick = () => {
    setShowIntro(false);
  };

  const determineResultPage = () => {
    const numberOfAnswer1 = selectedAnswers.filter((answer) => answer === '1').length;
    if (numberOfAnswer1 >= 2) {
      setResultPage('ResultPage1');
    } else {
      setResultPage('ResultPage2');
    }

  };

  const currentQuestion = quizQuestions[currentPage]?.[0];

  if (showIntro) {
    return (
      <div className={styles.introContainer}>
        <h1>Introduction Headline</h1>
        <p>Introduction paragraph.</p>
        <button onClick={handleIntroButtonClick}>Start Quiz</button>
      </div>
    );
  } else if (resultPage) {
    return (
      <div className={styles.resultContainer}>
        <h1>{resultPage}</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.quizContainer}>
        <div className={styles.quizQuestion}>
          <h1>{currentQuestion.h1}</h1>
          <p>{currentQuestion['1']}</p>
          <p>{currentQuestion['2']}</p>
          <p>{currentQuestion['3']}</p>
        </div>
        <div className={styles.quizQuestionContainer}>
          {quizButtons[currentPage]?.map((item, index) => {
            const answerKey = Object.keys(item)[0];
            const src = item.src;

            return (
              <QuizButton
                key={index}
                answer={item[answerKey]}
                src={src}
                onClick={() => handleClick(answerKey)}
                fadeOut={fadeOut}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
