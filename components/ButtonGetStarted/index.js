import styles from './ButtonGetStarted.module.css'
import { useState } from 'react';

export default function ButtonGetStarted({ onClick }) {
    const [audio, setAudio] = useState();


    const playSound = (audio) => {
        try {
            if (audio) {
                setAudio(audio);
                audio.play();
            }
        } catch (error) {
            console.log("Error playing audio:", error);
        }
    }
    return (
        <>
            <div className={styles.btn} onClick={() => {
                onClick();
                playSound(new Audio('/music/start.mp3'))
            }}>
                <div className={styles.btn__primary}>GET STARTED!</div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
