import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (currentPage === 'quizPageThree' && selectedAnswers.length === 3 ) {
      determineResultPage();
    }
  }, [currentPage, selectedAnswers]);
  

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
      }
      setFadeOut(false);
    }, 500);
  };

  const handleIntroButtonClick = () => {
    setShowIntro(false);
  };

  const determineResultPage = () => {
  const answerCounts = { 1: 0, 2: 0, 3: 0 };
  selectedAnswers.forEach((answer) => {
    answerCounts[answer]++;
  });

  if (answerCounts['1'] >= 2) {
    setResultPage('ResultPage1');
  } else if (answerCounts['2'] >= 2) {
    setResultPage('ResultPage2');
  } else if (answerCounts['3'] >= 2) {
    setResultPage('ResultPage3');
  } else {
    setResultPage('ResultPage4');
  }
};


  const currentQuestion = quizQuestions[currentPage]?.[0];

  if (showIntro) {
    return (
      <div className={styles.introContainer}>
        <h1>It's Quiz Time!</h1>
        <h2>Find out how ready you are to take care of our friends the mason bees!</h2>
        <p>Mason bees are important pollinators that play a crucial role in our ecosystem. By learning how to take care of them, we can help these tiny creatures thrive and make our world a better place. </p>
        <p>In this quiz, we'll test what you learned on BeeBoo so far to see if you can create a safe and healthy environment for mason bees to live and reproduce.</p>
        <p>So, get ready to put your thinking caps on and let's dive into the world of mason bees!</p>
        <div className={styles.landingButtonContainer}>
          <button onClick={handleIntroButtonClick}>Take the Quiz!</button>
        </div>
      </div>
    );
  } else if (resultPage) {
    return (
      <div className={styles.resultContainer}>
        {resultPage === 'ResultPage1' && (
          <div>
            <h1>Result Page 1</h1>
            <p>Content for result page 1.</p>
          </div>
        )}
        {resultPage === 'ResultPage2' && (
          <div>
            <h1>Result Page 2</h1>
            <p>Content for result page 2.</p>
          </div>
        )}
        {resultPage === 'ResultPage3' && (
          <div>
            <h1>Result Page 3</h1>
            <p>Content for result page 3.</p>
          </div>
        )}
        {resultPage === 'ResultPage4' && (
          <div>
            <h1>Result Page 4</h1>
            <p>Content for result page 4.</p>
          </div>
        )}
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
