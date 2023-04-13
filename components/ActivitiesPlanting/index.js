import styles from './ActivitiesPlanting.module.css'
import Close from '../Close'
import Next from '../Next'

export default function ActivitiesPlanting() {
    return (
        <div className={styles.plantContainer}>
            <div className={styles.backButton}>
                <Previous></Previous>
            </div>
            <div className={styles.contentContainer}>

            </div>
            <div className={styles.rightButtonCol}>
                <Close></Close>
                <Next></Next>
            </div>
        </div>
    );
}