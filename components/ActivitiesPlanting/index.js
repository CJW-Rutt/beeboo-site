import styles from './ActivitiesPlanting.module.css'
import Close from '../Close'
import Next from '../Next'
import { useState } from 'react'

export default function ActivitiesPlanting() {
    const[introShow, setIntroShow] = useState(true);

    return (
        <div className={styles.plantContainer}>
            <div className={styles.backButton}>
                <Previous></Previous>
            </div>
            <div className={styles.contentContainer}>
                { 
                    introShow ? (
                        <div className={styles.introContainer}>
                            <h1></h1>
                            
                        </div>
                    ) : (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>

                            </div>
                            <div className={styles.contentColRight}>

                            </div>
                        </div>
                    )
                }

            </div>
            <div className={styles.rightButtonCol}>
                <Close></Close>
                <Next></Next>
            </div>
        </div>
    );
}