import { useState } from 'react';
import Image from 'next/image';
import styles from "./Activities.module.css"
import ActivitiesCard01 from '../ActivitiesCard01';
import ButtonBuzzIt from "../ButtonBuzzIt"
import ActivitiesMain from '../ActivitiesMain';
import TextBubble from '../TextBubble';

export default function ActivitiesScreen({ image }) {
  const [isActivitiesVisible, setIsActivitiesVisible] = useState(false);

  const handleClose = () => {
      setIsActivitiesVisible(false);
  };

  const handleOpenActivities = () => {
      setIsActivitiesVisible(true);
  };

  return (
    <div className={styles.main__container}>
      <h1 className={styles.h1}>Congratulations, you're a bee expert!!</h1>
        <ActivitiesCard01/>
        <div onClick={handleOpenActivities}>
        <ButtonBuzzIt/>
      </div>
      {isActivitiesVisible && (
        <TextBubble onClose={handleClose}>
            <ActivitiesMain onClose={handleClose} />
        </TextBubble>
      )}
    </div>
  );
}
