import React from 'react';
import Image from 'next/image';
import styles from "./Intro.module.css"

export default function IntroScreen({ image }) {

  return (
    <div className={styles.container}>
        <Image
            className={styles.img}
            src="../carousel/intro-background.svg"
            height={100}
            width={100}
        />
    </div>
  );
}