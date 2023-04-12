import React from 'react';
import Image from 'next/image';
import styles from "./Intro.module.css"
import IntroCard01 from '../IntroCard01';
import IntroCard02 from '../IntroCard02';


export default function IntroScreen({ image }) {

  return (
    <div className={styles.main__container}>
        <h1 className={styles.h1}>Bee-come a hero!</h1>
        <IntroCard01/>
        <IntroCard02/>
    </div>
  );
}