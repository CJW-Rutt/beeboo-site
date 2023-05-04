import React, { useState, useEffect, createRef } from 'react';
import Image from 'next/image';
import styles from "./Quiz.module.css"
import QuizCard01 from '../QuizCard01';
import TextBubble from '../TextBubble';
import Quiz from '../Quiz';
import lottie from 'lottie-web'

export default function QuizScreen({ image, toggleNavElements }) {
    const [isQuizVisible, setIsQuizVisible] = useState(false);
    const [isDelayActive, setIsDelayActive] = useState(false);

    const handleClose = () => {
      setIsQuizVisible(false);
    };

    const handleOpenQuiz = () => {
      if (!isDelayActive) {
        setIsDelayActive(true);
        setTimeout(() => {
          setIsQuizVisible(true);
          setIsDelayActive(false);
          if (!isQuizVisible) {
            toggleNavElements();
          }
        }, 500);
      }
    };

    let animationContainer1 = createRef();
    let animationContainer2 = createRef();
  
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer1.current,
        rerender: 'svg',
        loop: true,
        pingpong: true,
        autoplay: true,
        path: './animations/pollen.json',
      });
  
      return () => anim.destroy();
    }, []);
  
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer2.current,
        rerender: 'svg',
        loop: true,
        pingpong: true,
        autoplay: true,
        path: './animations/pollen.json',
      });
  
      return () => anim.destroy();
    }, []);

  return (
    <>
      <div className={styles.main__container}>

        <h1 className={styles.h1}>Buzzing for a challenge?</h1>

        <div className={styles.content__container}>

          <Image
            className={styles.city}
            src="/carousel/city-quiz.svg"
            width={220}
            height={220}
          />

          <Image
            className={styles.house}
            src="/carousel/house-quiz.svg"
            width={170}
            height={170}
          />

          <div className={styles.quiz__container}>

            <div className={styles.card} onClick={handleOpenQuiz}>
              <QuizCard01/>
            </div>

            <Image
              className={styles.arrow__line}
              src="/carousel/arrow-line.svg"
              width={60}
              height={60}
            />

            <Image
              onClick={handleOpenQuiz}
              className={styles.bea}
              src="/carousel/bea-quiz.svg"
              width={230}
              height={230}
            />

            <div className={styles.animations}>
              {<div 
                className={styles.animation__container} 
                ref={animationContainer1}
              />}

              {<div 
                className={styles.animation__container02} 
                ref={animationContainer2} 
              />}
            </div>
          </div>


        </div>

        <Image
          className={styles.cloud01}
          src="./carousel/cloud.svg"
          height={100}
          width={200}
        />

        <Image
          className={styles.cloud02}
          src="./carousel/cloud-2.svg"
          height={100}
          width={200}
        />

        <Image
          className={styles.cloud03}
          src="./carousel/cloud-2.svg"
          height={100}
          width={200}
        />

      </div>

      {isQuizVisible && (
        <TextBubble
          onClose={handleClose}
          toggleNavElements={toggleNavElements}
          className={styles.quizModule}
          style={{ right: '915px' }}
        >
          <Quiz onClose={handleClose} toggleNavElements={toggleNavElements} />
        </TextBubble>
      )}

    </>
  );
}