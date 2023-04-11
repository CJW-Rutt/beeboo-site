import React from 'react';
import Image from 'next/image';
import styles from "./Quiz.module.css"

export default function QuizScreen({ image }) {

  return (
    <div className={styles.container}>
        <Image
            className={styles.img}
            src="../carousel/quiz-background.svg"
            height={100}
            width={100}
        />
    </div>
  );
}