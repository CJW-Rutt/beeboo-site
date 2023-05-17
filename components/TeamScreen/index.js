import React from 'react';
import styles from "./Team.module.css"
import TeamPage from '../team-page';

export default function TeamScreen({ image, toggleNavElements}) {
  return (
    <>
      <TeamPage toggleNavElements={toggleNavElements} />
      <div className={styles.container}>

      </div>
    </>
  );
}