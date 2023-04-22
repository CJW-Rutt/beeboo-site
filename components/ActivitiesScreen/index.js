import { useState } from 'react';
import Image from 'next/image';
import styles from "./Activities.module.css"
import ActivitiesCard01 from '../ActivitiesCard01';
import ActivitiesMain from '../ActivitiesMain';
import TextBubble from '../TextBubble';
import ButtonGetStarted from '../ButtonGetStarted'

export default function ActivitiesScreen({ image }) {
  const [isActivitiesVisible, setIsActivitiesVisible] = useState(false);
  const [isDelayActive, setIsDelayActive] = useState(false);

  const handleClose = () => {
      setIsActivitiesVisible(false);
  };

  // const handleOpenActivities = () => {
  //     setIsActivitiesVisible(true);
  // };

  //I struggle finding a way of doing this delay in a easier way :( Had to overwrite this code to make it work. Let me know if you have a better option
  const handleOpenActivities = () => {
    if (!isDelayActive) {
      setIsDelayActive(true);
      setTimeout(() => {
        setIsActivitiesVisible(true);
        setIsDelayActive(false);
      }, 500); // set the delay time in milliseconds
    }
  };

  return (
    <div className={styles.main__container}>
      <h1 className={styles.h1}>Activities await!!</h1>
        <ActivitiesCard01/>

        <div onClick={handleOpenActivities}>

        <ButtonGetStarted/>
        
      </div>
      {isActivitiesVisible && (
        <TextBubble onClose={handleClose}>
            <ActivitiesMain onClose={handleClose} />
        </TextBubble>
      )}
    </div>
  );
}
