import React from 'react';
import Image from 'next/image';
import styles from "./Quiz.module.css"
import QuizCard01 from '../QuizCard01';

export default function QuizScreen({ image }) {

  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.center}>
          <h1 className={styles.h1}>Buzzing for a challenge?</h1>
          <div className={styles.card}>
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

    </>
  );
}