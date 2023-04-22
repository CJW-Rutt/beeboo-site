import React from 'react';
import Image from 'next/image';
import styles from "./Intro.module.css"
import IntroCard01 from '../IntroCard01';
import IntroCard02 from '../IntroCard02';
import { useEffect, createRef } from 'react'
import lottie from 'lottie-web'


export default function IntroScreen({ image }) {

  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      pingpong: true,
      autoplay: true,
      path: "./animations/pollen.json",
    })

    

    return () => anim.destroy();
  }, [])

  return (
    <div className={styles.main__container}>
        <h1 className={styles.h1}>Bee-come a hero!</h1>
        <IntroCard01/>
        <IntroCard02/>
        <Image
          className={styles.hive}
          src="./intro/hive-intro.svg"
          height={100}
          width={100}
        />

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

        {<div className={styles.animation__container} ref={animationContainer}/>}

    </div>
  );
}