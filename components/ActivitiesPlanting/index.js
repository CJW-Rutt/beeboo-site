import styles from './ActivitiesPlanting.module.css'
import Close from '../Close'
import Next from '../Next'
import Previous from '../Previous'
import { useState } from 'react'
import Image from 'next/image'

export default function ActivitiesPlanting({ onClose }) {
    const [step, setStep] = useState(0);

    const handleStartPlanting = () => {
        setStep(1);
    }

    const handleNext = () => {
        console.log('Clicked Me');
        setStep(step + 1);
    }

    const handlePrevious = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    }

    return (
        <div className={styles.plantContainer}>
            <div className={styles.backButton}>
                { step !== 0 && <Previous onClick={handlePrevious} /> }
            </div>
            <div className={styles.contentContainer}>
                { 
                    step == 0 && (
                        <div className={styles.introContainer}>
                            <h1></h1>
                            <button className={styles.plantingStart} onClick={handleStartPlanting}>Start Planting</button>
                        </div>
                    )
                }
                {
                    step == 1 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Title Here Page 1</h1>
                                <p>Description Text</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/mascot/happy.svg' alt="happy mascot" width={250} height={250} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 2 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Title Here Page 2</h1>
                                <p>Description Text Page 2</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/mascot/happy.svg' alt="happy mascot" width={300} height={300} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.rightButtonCol}>
                <Close onClick={onClose} />
                { step > 0 && step !== 2 && <Next onClick={handleNext} /> }
            </div>
        </div>
    );
}