import styles from './InfoPollination.module.css'
import Close from '../Close'
import Next from '../Next'
import Previous from '../Previous'
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image'
import { Chart } from "../Chart"

export default function InfoPollination({ onClose, toggleNavElements }) {
    const [step, setStep] = useState(0);

    const toggleNavElementsCallback = useCallback((isVisible) => {
        toggleNavElements(isVisible);
    }, [toggleNavElements]);

    const handleStartPolination = () => {
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
    
    const handleClose = () => {
        toggleNavElements(true);
        onClose();
    };

    useEffect(() => {
        toggleNavElementsCallback(false);
    
        return () => {
          toggleNavElementsCallback(true);
        };
    }, [toggleNavElementsCallback]);

    return (
        <div className={styles.plantContainer}>
            <div className={styles.backButton}>
                {step !== 0 && <Previous onClick={handlePrevious} />}
            </div>
            <div className={styles.contentContainer}>
                {
                    step == 0 && (
                        <div className={styles.introContainer}>
                            <h1>Nature's Superstars!</h1>
                            <h2>These little heroes help plants grow <br />by something called pollination</h2>
                            <p>It's like when they go to a flower and give it a little kiss, which helps the flower make babies. And you know what that means? More flowers, more fruits, and more vegetables for us to eat! Yum!</p>
                            <div className={styles.plantingStart} onClick={handleStartPolination}>
                                Learn More About Pollination!
                                <Image src='/info-pollination/flowerpolly.svg' width={319.50} height={73.46} />
                            </div>
                            <div className={styles.plantingStartBackground}></div>
                        </div>
                    )
                }
                {
                    step == 1 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Fruits and vegetables</h1>
                                <p>Bees are like superheroes because they help pollinate about one-third of the food we eat. That's a lot of food, right?</p>
                                <p>Without bees, we wouldn't have as many tasty foods like strawberries, watermelons, and even chocolate!</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/fruits.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 2 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Honey</h1>
                                <p>Bees also make honey out of flower nectar!</p>
                                <p>Honey is important in cooking and baking delicious treats, like cakes. Honey can also be used as a remedy for sore throats!</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/honey.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 3 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Honey</h1>
                                <h2>Did you know...</h2>
                                <p>Alberta made the most honey in Canada in 2021!</p>
                            </div>
                            <div className={styles.chart__contentColRight}>
                                <Chart />
                            </div>
                        </div>
                    )
                }
                {
                    step == 4 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Flowers</h1>
                                <p>
                                    But that's not all! Bees are also great at making our world beautiful.
                                    They visit flowers of all different colours and shapes, making our gardens and parks so pretty to look at.
                                    They're like little artists painting the world with their fuzzy bodies.
                                </p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/lilacs.svg' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 5 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Nature's best friends </h1>
                                <p>
                                    Bees are not just cute and fuzzy insects, they're superheroes who help make sure we have food and a beautiful world to live in.
                                    Let's protect them and their homes, so they can keep doing their important work.
                                </p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/fwappybee.svg' width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 6 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>What you can do!</h1>
                                <p>
                                    We can plant flowers that bees love, like bright and colourful sunflowers, daisies, and lavender.
                                    Also, we can start our own colony in our backyard!
                                </p>
                                <p>
                                    Find out what else you can do about bees!
                                </p>
                                {/* <div className={styles.buttonContainer}>
                                    <div className={styles.innerButtonContainer}>
                                        <div className={styles.activitiesButton}>Try These Activities!</div>
                                        <div className={styles.activitiesButtonBackground}></div>
                                    </div>
                                </div> */}
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/beeboy.svg' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.rightButtonCol}>
                <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
                {step > 0 && step !== 6 && <Next onClick={handleNext} />}
            </div>
        </div>
    );
}