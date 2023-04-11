import React from 'react';
import Image from 'next/image';
import styles from "./Activities.module.css"

export default function ActivitiesScreen({ image }) {

  return (
    <div className={styles.container}>
        <Image
            className={styles.img}
            src="../carousel/activities-background.svg"
            height={100}
            width={100}
        />
    </div>
  );
}