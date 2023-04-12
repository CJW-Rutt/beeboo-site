import React from 'react';
import Image from 'next/image';
import styles from "./Learn.module.css"
import LearnCard01 from '../LearnCard01';
import LearnCard02 from '../LearnCard02';

export default function LearnScreen({ image }) {

  return (
    <div className={styles.main__container}>

        <div className={styles.container}>

            <div className={styles.left}>
                <LearnCard01/>
                <Image
                    src="/ui-icons/arrow-02.svg"
                    width={70}
                    height={60}
                />
            </div>

            <div className={styles.right}>
                <h1 className={styles.h1}>Let's learn together!</h1>
                <div className={styles.right__card}>
                    <LearnCard02/>
                    <Image
                        src="/ui-icons/arrow.svg"
                        width={70}
                        height={60}
                    />

                </div>
            </div>
        </div>

    </div>
  );
}