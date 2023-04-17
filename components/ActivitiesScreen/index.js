import React from 'react';
import Image from 'next/image';
import styles from "./Activities.module.css"
import ActivitiesCard01 from '../ActivitiesCard01';
import ButtonBuzzIt from "../ButtonBuzzIt"

export default function ActivitiesScreen({ image }) {

  return (
    <div className={styles.main__container}>
      <h1 className={styles.h1}>Congratulations, you're a bee expert!!</h1>
      <ActivitiesCard01/>
      <ButtonBuzzIt/>
    </div>
  );
}