import { useState, useEffect, useCallback } from 'react';
import styles from './Quiz.module.css';
import { quizButtons } from '../../data/quiz.js';
import { quizQuestions } from '../../data/quiz.js';
import QuizButton from '../QuizButton';
import Image from 'next/image';
import ButtonLearning from '../ButtonLearning';
import Close from '../Close';

export default function Quiz({ onClose, toggleNavElements }) {
  const [currentPage, setCurrentPage] = useState('quizPageOne');
  const [fadeOut, setFadeOut] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [resultPage, setResultPage] = useState(null);
  const [audio, setAudio] = useState();
  const [questionAnswers, setQuestionAnswers] = useState({
    quizPageOne: null,
    quizPageTwo: null,
    quizPageThree: null,
    quizPageFour: null,
  });

  const playSound = (audio) => {
    try {
        if (audio) {
            setAudio(audio);
            audio.play();
        }
    } catch (error) {
        console.log("Error playing audio:", error);
    }
  }

  const toggleNavElementsCallback = useCallback((isVisible) => {
    toggleNavElements(isVisible);
  }, [toggleNavElements]);

  const handleClick = (answer, weight) => {
    setFadeOut(true);
  
    setTimeout(() => {
      if (currentPage === 'landingPage') {
        setCurrentPage('quizPageOne');
      } else if (currentPage === 'quizPageOne') {
        const isCorrectAnswer = weight === 1;
        setQuestionAnswers((prevAnswers) => ({
          ...prevAnswers,
          quizPageOne: isCorrectAnswer,
        }));
  
        setSelectedAnswers((prevSelectedAnswers) => [...prevSelectedAnswers, weight]);
  
        setCurrentPage('quizPageTwo');
      } else if (currentPage === 'quizPageTwo') {
        const isCorrectAnswer = weight === 1;
        setQuestionAnswers((prevAnswers) => ({
          ...prevAnswers,
          quizPageTwo: isCorrectAnswer,
        }));
  
        setSelectedAnswers((prevSelectedAnswers) => [...prevSelectedAnswers, weight]);
  
        setCurrentPage('quizPageThree');
      } else if (currentPage === 'quizPageThree') {
        const isCorrectAnswer = weight === 1;
        setQuestionAnswers((prevAnswers) => ({
          ...prevAnswers,
          quizPageThree: isCorrectAnswer,
        }));
  
        setSelectedAnswers((prevSelectedAnswers) => [...prevSelectedAnswers, weight]);
  
        setCurrentPage('quizPageFour');
      }
  
      setFadeOut(false);

      if (currentPage === 'quizPageFour') {
        const isCorrectAnswer = weight === 1;
        setQuestionAnswers((prevAnswers) => ({
          ...prevAnswers,
          quizPageFour: isCorrectAnswer,
        }));
      }


    }, 500);
  };

  const handleIntroButtonClick = () => {
    setShowIntro(false);
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    toggleNavElementsCallback(false);
  }, []);

  const determineResultPage = useCallback(() => {
    const totalWeight = selectedAnswers.reduce((a, b) => a + b, 0);
    console.log('Trying to determine Results');
    if (totalWeight <= 0) {
      setResultPage('ResultPage1');
      playSound(new Audio('/music/fail.mp3'));
    } else if (totalWeight == 1) {
      setResultPage('ResultPage2');
      playSound(new Audio('/music/success.mp3'))
    } else if (totalWeight == 2) {
      setResultPage('ResultPage3');
      playSound(new Audio('/music/pass.mp3'))
    } else if (totalWeight == 3) {
      setResultPage('ResultPage4');
      playSound(new Audio('/music/tada.m4a'))
    } else if (totalWeight == 4) {
      setResultPage('ResultPage5');
      playSound(new Audio('/music/tada.m4a'))
    }
  }, [selectedAnswers]);
  
  useEffect(() => {
    if (currentPage === 'quizPageFour' && questionAnswers.quizPageFour !== null) {
      determineResultPage();
    }
  }, [currentPage, questionAnswers, determineResultPage]);

  const currentQuestion = quizQuestions[currentPage]?.[0];

  if (showIntro) {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.fillCol}>

        </div>
        <div className={styles.introContainer}>
          <h1>It's Quiz Time!</h1>
          <h2>Find out how ready you are to take care of our friends the mason bees!</h2>
          <p>Mason bees are important pollinators that play a crucial role in our ecosystem. By learning how to take care of them, we can help these tiny creatures thrive and make our world a better place. </p>
          <p>Get ready to put your thinking caps on and dive into the world of mason bees!</p>
          <div className={styles.introButton} onClick={handleIntroButtonClick}>
            <p>Take the Quiz!</p>
          </div>
          <div className={styles.introButtonBackground} />
        </div>
        <div className={styles.quizBackContainer}>
          <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
        </div>
      </div>
    );
  } else if (resultPage) {
    return (
      <div className={styles.resultContainer}>
        {
          resultPage === 'ResultPage1' && (
            <div className={styles.resultsPage}>
              <div className={styles.resultsInnerContainer}>
                <div className={styles.resultsLeftCol}>
                  <h1>You got 0%.</h1>
                  <h3>It's time to try again!</h3>
                  <p>I know you can do it. You just need to review the important information found in the Learning Section</p>
                  <p>Don't give up yet. Bee's still need your help. They can't survive without you.</p>
                  <p>So let's do a review of all the facts to help bees and make a better future!</p>
                </div>
                <div className={styles.questionResult}>
                  <p>Question 1: {questionAnswers.quizPageOne ? 'Correct' : 'Wrong'}</p>
                  <p>Question 2: {questionAnswers.quizPageTwo ? 'Correct' : 'Wrong'}</p>
                  <p>Question 3: {questionAnswers.quizPageThree ? 'Correct' : 'Wrong'}</p>
                  <p>Question 4: {questionAnswers.quizPageFour ? 'Correct' : 'Wrong'}</p>
                </div>
                <div className={styles.buttonCol}>
                  <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
                </div>
              </div>
            </div>
          )
        }
        {
          resultPage === 'ResultPage2' && (
            <div className={styles.resultsPage}>
              <div className={styles.resultsInnerContainer}>
                <div className={styles.resultsLeftCol}>
                  <h1>You're almost there! 25%!</h1>
                  <h3>But you still need to review more!</h3>
                  <p>You're so close to bee-ing an expert on bees.</p>
                  <p>Without your help the bee population will slowly fade away.</p>
                  <p>Lets make our bee friends happy and go back to learn more about them!</p>
                </div>
                <div className={styles.resultsRightCol}>
                  <p>Question 1: {questionAnswers.quizPageOne ? 'Correct' : 'Wrong'}</p>
                  <p>Question 2: {questionAnswers.quizPageTwo ? 'Correct' : 'Wrong'}</p>
                  <p>Question 3: {questionAnswers.quizPageThree ? 'Correct' : 'Wrong'}</p>
                  <p>Question 4: {questionAnswers.quizPageFour ? 'Correct' : 'Wrong'}</p>
                </div>
                <div className={styles.buttonCol}>
                  <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback}  />
                </div>
              </div>
            </div>
          )
        }
        {
          resultPage === 'ResultPage3' && (
            <div className={styles.resultsPage__passed}>
              <div className={styles.resultsInnerContainer}>
                <div className={styles.resultsLeftCol__passed}>
                  <h1>You Passed! You got 50%!</h1>
                  <h3>Congratulations, but you could learn more still!</h3>
                  <p>You passed the quiz, but just barely.</p>
                  <p>Your knowledge of the important steps to create a safe and healthy environment for mason bees to thrive is impressive.</p>
                  <p>Keep up the good work, and continue learning about the fascinating world of bees!</p>
                </div>
                <div className={styles.resultsRightCol}>
                  <p>Question 1: {questionAnswers.quizPageOne ? 'Correct' : 'Wrong'}</p>
                  <p>Question 2: {questionAnswers.quizPageTwo ? 'Correct' : 'Wrong'}</p>
                  <p>Question 3: {questionAnswers.quizPageThree ? 'Correct' : 'Wrong'}</p>
                  <p>Question 4: {questionAnswers.quizPageFour ? 'Correct' : 'Wrong'}</p>
                </div>
                <div className={styles.buttonCol}>
                  <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
                </div>
              </div>
            </div>
          )
        }
        {
          resultPage === 'ResultPage4' && (
            <div className={styles.resultsPage__100}>
              <div className={styles.resultsInnerContainer}>
                <div className={styles.resultsLeftCol__100}>
                  <h1>YOU GOT 75%!!!</h1>
                  <h3>The future is in good hands!</h3>
                  <p>Congratulations, you passed the quiz with a PERFECT SCORE!</p>
                  <p>You did it. Your knowledge of the bees and how to help them really shows.</p>
                  <p>Let's make the future better for everyone together!</p>
                </div>
                <div className={styles.resultsRightCol}>
                  <p>Question 1: {questionAnswers.quizPageOne ? 'Correct' : 'Wrong'}</p>
                  <p>Question 2: {questionAnswers.quizPageTwo ? 'Correct' : 'Wrong'}</p>
                  <p>Question 3: {questionAnswers.quizPageThree ? 'Correct' : 'Wrong'}</p>
                  <p>Question 4: {questionAnswers.quizPageFour ? 'Correct' : 'Wrong'}</p>
                </div>
                <div className={styles.buttonCol}>
                  <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
                </div>
              </div>
            </div>
          )
        }
        {
          resultPage === 'ResultPage5' && (
            <div className={styles.resultsPage__100}>
              <div className={styles.resultsInnerContainer}>
                <div className={styles.resultsLeftCol__100}>
                  <h1>YOU GOT 100%!!!</h1>
                  <h3>You are the BEE SAVIOR!</h3>
                  <p>The bees praise your knowledge and understanding of their ecosystem.</p>
                  <p>They swear fealty and allegience to your crown. Go forth great Bee King or Queen.</p>
                  <p>Let your people shine!</p>
                </div>
                <div className={styles.resultsRightCol}>
                  <p>Question 1: {questionAnswers.quizPageOne ? 'Correct' : 'Wrong'}</p>
                  <p>Question 2: {questionAnswers.quizPageTwo ? 'Correct' : 'Wrong'}</p>
                  <p>Question 3: {questionAnswers.quizPageThree ? 'Correct' : 'Wrong'}</p>
                  <p>Question 4: {questionAnswers.quizPageFour ? 'Correct' : 'Wrong'}</p>
                </div>
                <div className={styles.buttonCol}>
                  <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  } else {
    return (
      <div className={styles.quizContainer}>
        <div className={styles.quizButtonColLeft}>

        </div>
        <div className={styles.quizContent}>
          <div className={styles.quizQuestion}>
            <div className={styles.titleRow}>
              <div className={styles.innerRow}>
                <h1>{currentQuestion.h1}</h1>
                <h2>{currentQuestion.h2}</h2>
              </div>
            </div>
            <p>{currentQuestion['1']}</p>
            <p>{currentQuestion['2']}</p>
            <p>{currentQuestion['3']}</p>
          </div>
          <div className={styles.quizQuestionContainer}>
            {
              quizButtons[currentPage]?.map((item, index) => {
                const answerKey = Object.keys(item)[0];
                const src = item.src;

                return (
                  <QuizButton
                    key={index}
                    answer={item[answerKey]}
                    src={src}
                    onClick={() => {
                      handleClick(answerKey, item.weight)
                      playSound(new Audio('/music/quiz-answer.mp3'));
                    }}
                    fadeOut={fadeOut}
                  />
                );
              })
            }
          </div>
        </div>
        <div className={styles.quizButtonColRight}>
          <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
        </div>
      </div>
    );
  }
}
