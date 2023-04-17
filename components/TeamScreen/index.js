import React from 'react';
import Image from 'next/image';
import styles from "./Team.module.css"
import TeamPage from '../team-page';

export default function TeamScreen({ image }) {

  return (
    <div className={styles.main__container}>
      <h1 className={styles.h1}>Meet the honey-makers!</h1>
      <p className={styles.p}>Our team is like a colony of bees, working together to create something amazing. <br/> Get to know the busy bees who designed and developed this app just for you!</p>
    </div>
  );
}