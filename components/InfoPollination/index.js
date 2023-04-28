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

                            <h2 className={styles.h2__content}>Bees help plants grow by something called pollination</h2>

                            <p className={styles.p__content}>
                                They go to flowers to give it a little kiss, which helps them 
                                to make babies. This means <strong>more flowers</strong>, more fruits, 
                                and more vegetables for us to eat! <strong>Yum!</strong>
                            </p>

                            <div className={styles.btn} onClick={handleStartPolination}> 
                                <div className={styles.btn__primary}>
                                    <div className={styles.content__container}>
                                        <h2 className={styles.h2}>Pollination</h2>
                                        <Image
                                            src='/info-pollination/flowerpolly.svg'
                                            width={300}
                                            height={70}
                                        />
                                    </div>
                                </div>
                                <div className={styles.btn__background}></div>
                            </div>

                        </div>
                    )
                }
                {
                    step == 1 && (
                        <div className={styles.innerContentContainer}>
                            <h1 className={styles.info__title}>Pollination</h1> 
                            <div className={styles.contentContainer}>
                                <div className={styles.contentContainer__inner}>
                                    <p>
                                        Bees are like superheroes because they help pollinate about one-third of 
                                        the food we eat. That's a lot of food, right?
                                    </p>
                                    <p>
                                        Without bees, we wouldn't have as many tasty foods like strawberries, 
                                        watermelons, and even chocolate!
                                    </p> 
                                </div>

                                <Image className={styles.chocolate} src='/info-pollination/yummychoco.svg' alt="happy mascot" width={180} height={180} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 2 && (
                        <div className={styles.innerContentContainer}>
                            <h1 className={styles.info__title}>Pollination</h1>
                            <div className={styles.contentContainer}>
                                <div className={styles.contentContainer__inner}>
                                    <p>
                                        But that's not all! Bees are also great at making our world beautiful. 
                                        They visit flowers of all different colours and shapes, making our 
                                        gardens and parks so pretty to look at.
                                    </p>
                                    <p>
                                        They're like little artists painting the world with their fuzzy bodies.
                                    </p> 
                                </div>
                                <Image src='/info-pollination/lilacs.svg' alt="happy mascot" width={180} height={180} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 3 && (
                        <div className={styles.innerContentContainer__2}>
                            <h1 className={styles.info__title}>Nature's best friends</h1>
                            <div className={styles.contentContainer}>
                                <div className={styles.contentContainer__inner}>
                                    <p>
                                        Bees are not just cute and fuzzy insects, they're superheroes 
                                        who help make sure we have food and a beautiful world to live in. 
                                    </p>
                                    <p>
                                        Let's protect them and their homes, so 
                                        they can keep doing their important work.
                                    </p>
                                </div>

                                <Image src='/info-pollination/fwappybee.svg' width={180} height={180} />
                            </div>
                        </div>
                    )
                }                
                {
                    step == 4 && (
                        <div className={styles.innerContentContainer__3}>
                            <div className={styles.contentContainer__3}>
                                <h1 className={styles.info__title}>What you can do!</h1>
                                <div className={styles.contentContainer__inner}>
                                    <p>
                                        We can plant flowers that bees love or start our own colony in our backward!! 
                                    </p>
                                    <p>
                                        Find out what else you can do about bees!
                                    </p>
                                </div>
                                <div className={styles.innerButtonContainer}>
                                    <div className={styles.activitiesButton}>Try These Activities!</div>
                                    <div className={styles.activitiesButtonBackground}></div>
                                </div>
                            </div>

                            <Image src='/info-pollination/beeboy.svg' alt="happy mascot" width={180} height={180} />
                                
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