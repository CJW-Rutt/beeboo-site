import styles from './InfoPollination.module.css'
import Close from '../Close'
import Next from '../Next'
import Previous from '../Previous'
import { useState } from 'react'
import Image from 'next/image'

export default function InfoPollination({ onClose, toggleNavElements }) {
    const [step, setStep] = useState(0);

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

    return (
        <div className={styles.plantContainer}>
            <div className={styles.backButton}>
                { step !== 0 && <Previous onClick={handlePrevious} /> }
            </div>
            <div className={styles.contentContainer}>
                { 
                    step == 0 && (
                        <div className={styles.introContainer}>
                                <h1>Nature's Superstars!</h1>
                                <h2>These little heroes help plants grow <br />by something called pollination</h2>
                                <p>It's like when they go to a flower and give it a little kiss, which helps the flower make babies. And you know what that means? More flowers, more fruits, and more vegetables for us to eat! Yum!</p>
                            <div className={styles.plantingStart} onClick={handleStartPolination}>
                                Learn More About Polination!
                                <Image src='/info-pollination/flowerpolly.png' width={319.50} height={73.46}/>
                            </div>
                            <div className={styles.plantingStartBackground}></div>
                        </div>
                    )
                }
                {
                    step == 1 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Pollination</h1>
                                <p>Bees are like superheroes because they help pollinate about one-third of the food we eat. That's a lot of food, right?</p> 
                                <p>Without bees, we wouldn't have as many tasty foods like strawberries, watermelons, and even chocolate!</p> 
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/yummychoco.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 2 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Pollination</h1>
                                <p>
                                    But that's not all! Bees are also great at making our world beautiful. 
                                    They visit flowers of all different colours and shapes, making our gardens and parks so pretty to look at. 
                                    They're like little artists painting the world with their fuzzy bodies.
                                </p> 
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/lilacs.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 3 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Nature's best friends</h1>
                                <p>
                                    Bees are not just cute and fuzzy insects, they're superheroes who help make sure we have food and a beautiful world to live in. 
                                    Let's protect them and their homes, so they can keep doing their important work.
                                </p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/fwappybee.png' width={208} height={208} />
                            </div>
                        </div>
                    )
                }                
                {
                    step == 4 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>What you can do!</h1>
                                <p>
                                    We can plant flowers that bees love, like bright and colourful sunflowers, daisies, and lavender. 
                                    Also, we can start our own colony in our backward!!
                                </p>
                                <p>
                                    Find out what else you can do about bees!
                                </p>
                                <div className={styles.buttonContainer}>
                                    <div className={styles.innerButtonContainer}>
                                        <div className={styles.activitiesButton}>Try These Activities!</div>
                                        <div className={styles.activitiesButtonBackground}></div>
                                    </div>
                                </div>  
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/info-pollination/beeboy.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.rightButtonCol}>
                <Close onClick={onClose} />
                { step > 0 && step !== 4 && <Next onClick={handleNext} /> }
            </div>
        </div>
    );
}