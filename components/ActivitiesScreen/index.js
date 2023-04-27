import { useState } from 'react';
import Image from 'next/image';
import styles from "./Activities.module.css"
import ActivitiesCard01 from '../ActivitiesCard01';
import ActivitiesMain from '../ActivitiesMain';
import TextBubble from '../TextBubble';
import ButtonGetStarted from '../ButtonGetStarted'

export default function ActivitiesScreen({ image, toggleNavElements }) {
  const [isActivitiesVisible, setIsActivitiesVisible] = useState(false);
  const [isDelayActive, setIsDelayActive] = useState(false);

  const handleClose = () => {
      setIsActivitiesVisible(false);
  };

  const handleOpenActivities = () => {
    if (!isDelayActive) {
      setIsDelayActive(true);
      toggleNavElements();
      setTimeout(() => {
        setIsActivitiesVisible(true);
        setIsDelayActive(false);
      }, 500);
    }
  };

  return (
    <div className={styles.main__container}>
      <h1 className={styles.h1}>Activities await!!</h1>

      <div className={styles.content__container}>

        <Image
          className={styles.boo}
          src="./mascot/boo-happy-right.svg"
          width={100}
          height={100}
        />

        <div className={styles.content}>
          <ActivitiesCard01/>

          <div onClick={handleOpenActivities}>
            <ButtonGetStarted
              className={styles.btn}
            />
          </div>
        </div>

      </div>

      {isActivitiesVisible && (
        <TextBubble onClose={handleClose} toggleNavElements={toggleNavElements}>
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
