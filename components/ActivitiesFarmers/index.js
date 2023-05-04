import Image from "next/image";
import Close from "../Close";
import Next from "../Next";
import Previous from "../Previous";
import { useState, useCallback, useEffect } from "react";
import styles from './ActivitiesFarmers.module.css'

export default function ActivitiesFarmers({ onClose, toggleNavElements }) {
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
    
        return () => {
          toggleNavElementsCallback(true);
        };
    }, [toggleNavElementsCallback]);


    return (
        <>
            <div className={styles.masonContainer}>
                <div className={styles.backButton}>
                    {step !== 0 && <Previous onClick={handlePrevious} />}
                </div>
                <div className={styles.contentContainer}>
                    {
                        step == 0 && (
                            <div className={styles.introContainer}>
                                <h1>
                                    Support Local Farmers
                                </h1>
                                <p>
                                    Supporting local farmers can help your community provide a safer environment for the bees.
                                </p>
                                <Image src='/activities-farmer/farmer.svg' width={63} height={63} />
                                <h2>
                                    Keep reading to learn more!
                                </h2>
                                <div className={styles.masonStart} onClick={handleStartPlanting}>Let's Do It!</div>
                                <div className={styles.masonStartBackground}></div>
                            </div>
                        )
                    }
                    {
                        step == 1 && (
                            <div className={styles.innerContentContainer}>
                                <div className={styles.contentColLeft}>
                                    <h1>
                                        Help maintain natural habitats for bees
                                    </h1>
                                    <p>
                                        Farmers rely on bees to help pollinate their crops so that they can grow.
                                    </p>
                                    <p>
                                        By supporting local farms, you're helping to maintain the habitats that support these pollinators!
                                    </p>
                                </div>
                                <div className={styles.contentColRight}>
                                    <Image src='/activities-farmer/field.png' alt="a farm field" width={208} height={208} />
                                </div>
                            </div>
                        )
                    }
                    {
                        step == 2 && (
                            <div className={styles.innerContentContainer}>
                                <div className={styles.contentColLeft}>
                                    <h1>
                                        Organic farming
                                    </h1>
                                    <p>
                                        Many small-scale local farms use organic and sustainable farming practices that minimize the use of pesticides and other chemicals.
                                    </p>
                                    <p>
                                        This can help to reduce the exposure of bees and other pollinators to harmful chemicals that can affect their health and survival.                                    </p>
                                </div>
                                <div className={styles.contentColRight}>
                                    <Image src='/activities-farmer/sprout.png' alt="growing sprout in soil" width={208} height={208} />
                                </div>
                            </div>
                        )
                    }
                    {
                        step == 3 && (
                            <div className={styles.innerContentContainer}>
                                <div className={styles.contentColLeft}>
                                    <h1>
                                        Reduce carbon footprint
                                    </h1>
                                    <p>
                                        By buying local, you're also reducing the carbon footprint associated with transporting food long distances.
                                    </p>
                                    <p>
                                        This can help to mitigate climate change, which is a major threat to bee populations around the world.
                                    </p>
                                </div>
                                <div className={styles.contentColRight}>
                                    <Image src='/activities-farmer/fruit.png' alt="fruit basket" width={208} height={208} />
                                </div>
                            </div>
                        )
                    }
                    {
                        step == 4 && (
                            <div className={styles.innerContentContainer}>
                                <div className={styles.contentColLeft}>
                                    <h1>Visit your local farms!</h1>
                                    <h2>Together, we can make a difference!</h2>
                                    <p>You can check online or other resources to find farms in your area</p>
                                </div>
                                <div className={styles.contentColRight}>
                                    <Image src='/activities-farmer/community.png' alt="people with heart" width={208} height={208} />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={styles.rightButtonCol}>
                    <Close onClick={handleClose}  onToggleNavElements={toggleNavElementsCallback}  />
                    {step > 0 && step !== 4 && <Next onClick={handleNext} />}
                </div>
            </div>
        </>
    )
}