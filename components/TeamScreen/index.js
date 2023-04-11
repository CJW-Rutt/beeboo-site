import React from 'react';
import Image from 'next/image';
import styles from "./Team.module.css"

export default function TeamScreen({ image }) {

  return (
    <div className={styles.container}>
        <Image
            className={styles.img}
            src="../carousel/team-background.svg"
            height={100}
            width={100}
        />
    </div>
  );
}