import styles from './ActivitiesMasonBees.module.css'
import Close from '../Close'
import Next from '../Next'
import Previous from '../Previous'
import { useState, useCallback, useEffect } from "react"
import Image from 'next/image'

export default function ActivitiesMasonBees({ onClose, toggleNavElements  }) {
    const [step, setStep] = useState(0);

    const toggleNavElementsCallback = useCallback((isVisible) => {
        if (toggleNavElements) {
            toggleNavElements(isVisible);
        }
    }, [toggleNavElements]);

    const handleClose = () => {
        if (toggleNavElements) {
            toggleNavElements(true);
        }
        onClose();
    };
    const handleStartPlanting = () => {
        setStep(1);
    }

    const handleNext = () => {
        setStep(step + 1);
    }

    const handlePrevious = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    }

    useEffect(() => {
        toggleNavElementsCallback(false);
    }, [toggleNavElementsCallback]);

    return (
        <div className={styles.masonContainer}>
            <div className={styles.backButton}>
                { step !== 0 && <Previous onClick={handlePrevious} /> }
            </div>
            <div className={styles.contentContainer}>
                { 
                    step == 0 && (
                        <div className={styles.introContainer}>
                                <h1>Mason Bees At-Home Kit</h1>
                                <p>Mason bees are great pollinators and can be kept in DIY kits at home. These kits come with instructions on how to set them up and care for the bees. </p>
                                <Image src='/bizzybee.svg' width={63} height={63} />
                                <h2>Let’s check out the main points for mason bee care!</h2>
                            <div className={styles.masonStart} onClick={handleStartPlanting}>Let's Do It!</div>
                            <div className={styles.masonStartBackground}></div>
                        </div>
                    )
                }
                {
                    step == 1 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Setting up the nest</h1>
                                <p>Mason bees like to live in holes so your DIY kit will come with cardboard or bamboo nesting tubes for bees to use.</p>
                                <p>To protect the bees from the rain and sun, place their nest in a dry, protected area like a shed or garage.</p>    
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/activities-mason/honeycomb.svg' alt="honeycomb graphic" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 2 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Provide Food</h1>
                                <p>Mason bees need nectar and pollen as food. You can plant flowers that provide nectar and pollen nearby. They also thrive with clean water!</p>
                                <p>Check out the previous activity for a list of great flowers to plant!</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/activities-mason/flowers2.svg' alt="flowers" width={180} height={180} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 3 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Monitor the bees</h1>
                                <p>Keep an eye on nests to make sure that the bees are using them and that are no other bugs, like ants, who can hurt the bees.</p>
                                <p>Enjoy watching the bees fly in and out of the tubes as they go about their bee-sy lives!</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/activities-mason/beeflower.svg' alt="bees and flowers" width={180} height={180} />
                            </div>
                        </div>
                    )
                }                
                {
                    step == 4 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>That's it!</h1>
                                <h2>Those are the main points of mason bee care!</h2>
                                <p>To make sure you're ready to take care of the bees, check out our quiz!</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/activities-mason/eureka.svg' alt="person sitting and reading a book" width={180} height={180} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.rightButtonCol}>
                <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
                { step > 0 && step !== 4 && <Next onClick={handleNext} /> }
            </div>
        </div>
    );
}