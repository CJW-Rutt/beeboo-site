import { useState, useEffect, createRef } from 'react';
import Image from 'next/image';
import styles from "./Activities.module.css"
import ActivitiesCard01 from '../ActivitiesCard01';
import ActivitiesMain from '../ActivitiesMain';
import TextBubble from '../TextBubble';
import ButtonGetStarted from '../ButtonGetStarted'
import lottie from 'lottie-web'


export default function ActivitiesScreen({ image, toggleNavElements }) {
  const [isActivitiesVisible, setIsActivitiesVisible] = useState(false);
  const [isDelayActive, setIsDelayActive] = useState(false);
  const [audio, setAudio] = useState();

  let animationContainer1 = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: animationContainer1.current,
          rerender: 'svg',
          loop: true,
          pingpong: true,
          autoplay: true,
          path: './animations/boo.json',
        });
    
        return () => anim.destroy();
      }, []);

  const playSound = (audio) => {
      try {
          if (audio) {
              setAudio(audio);
              audio.volume = 0.4;
              audio.play();
          }
      } catch (error) {
          console.log("Error playing audio:", error);
      }
  }

  const handleClose = () => {
    setIsActivitiesVisible(false);
    toggleNavElements(true);
  };

  const handleOpenActivities = () => {
    if (!isDelayActive) {
      setIsDelayActive(true);
      toggleNavElements(false);
      setIsActivitiesVisible(true);
      setTimeout(() => {
        setIsDelayActive(false);
      }, 500);
    }
  };
  
  return (
    <div className={styles.main__container}>
      <h1 className={styles.h1}>Activities await!!</h1>

      <div className={styles.content__container}>

        {<div 
          className={styles.animation__container} 
          ref={animationContainer1}
          onClick={() => {
            playSound(new Audio('/music/boo.mp3'))
        }}
        />}

        <div className={styles.content}>
          <ActivitiesCard01/>

          <div className={styles.left} onClick={() => {
            playSound(new Audio('/music/open.mp3'))
            handleOpenActivities('InfoPestsClimate');
          }}>
            <ButtonGetStarted className={styles.btn}/>
          </div>

        </div>

      </div>

      {isActivitiesVisible && (
        <TextBubble 
          onClose={handleClose} 
          toggleNavElements={toggleNavElements}
          style={{ left: '3665px' }}
          >
            <ActivitiesMain onClose={handleClose} toggleNavElements={toggleNavElements} />
        </TextBubble>
      )}

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
  );
}
