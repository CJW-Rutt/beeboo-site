import React from 'react';
import Image from 'next/image';
import styles from "./Team.module.css"
import TeamPage from '../team-page';

export default function TeamScreen({ image, toggleNavElements}) {
  return (
    <>
      <TeamPage toggleNavElements={toggleNavElements} />
      <div className={styles.container}>
        <Image
          className={styles.img}
          src="./carousel/nav-team.svg"
          height={100}
          width={100}
        />
      </div>
    </>
  );
}