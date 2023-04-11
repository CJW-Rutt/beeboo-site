import React from 'react';
import Image from 'next/image';
import styles from "./Learn.module.css"

export default function LearnScreen({ image }) {

  return (
    <div className={styles.container}>
        <Image
            className={styles.img}
            src="../carousel/learn-background.svg"
            height={100}
            width={100}
        />
    </div>
  );
}