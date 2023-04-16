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
                                <h1>Bee-come a Flower Planting Pro</h1>
                                <h2>Help Save Bees One Bloom at a Time!</h2>
                                <p>Bees are important pollinators that help plants grow and produce the food we eat.<br />Unfortunately, bees are facing many challenges, including habitat loss and pesticide use.</p>
                                <h2>But there's something you can do to help bees: plant flowers!<br />Let's go over how to plant flowers to attract bees and help them thrive.</h2>
                            <div className={styles.plantingStart} onClick={handleStartPlanting}>Let's Get Planting!</div>
                            <div className={styles.plantingStartBackground}></div>
                        </div>
                    )
                }
                {
                    step == 1 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Step 1:</h1>
                                <h2>Choosing the right flowers!</h2>
                                <p>Bees are attracted to flowers that are brightly coloured, have a strong fragrance, and are rich in nectar and pollen. </p>
                                <p>Some of the best flowers to plant for bees include:</p>
                                <div className={styles.step1List}>
                                    <ul>
                                        <li>Sunflowers</li>
                                        <li>Lavender</li>
                                        <li>Marigolds</li>
                                        <li>Daisies</li>
                                    </ul>
                                    <ul>
                                        <li>Coneflowers</li>
                                        <li>Cosmos</li>
                                        <li>Black-eyed Susans</li>
                                        <li>Wildflowers</li>
                                    </ul>
                                </div>
                                <p>Check out your local nursery or garden centre, or you can start them from seed.</p>      
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/planting/sunflower.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 2 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Step 2:</h1>
                                <h2>Preparing the soil!</h2>
                                <p>Before you plant your flowers, you'll need to prepare the soil.</p>
                                <p>Bees prefer soil that is well-drained and rich in organic matter.</p>
                                <p>To improve the soil, you can:</p>
                                <ul>
                                    <li>Add compost or aged manure to the soil</li>
                                    <li>Till the soil to loosen it up</li>
                                    <li>Remove any weeds or debris</li>
                                </ul>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/planting/potting-soil.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 3 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Step 3:</h1>
                                <h2>Plant the flowers!</h2>
                                <p>Now it's time to plant the flowers!  Dig a hole slightly larger than the root ball of your plant. Gently remove the plant from its container and loosen the roots.</p>
                                <p>Place the plant in the hole and backfill with soil. Water thoroughly and add a layer of mulch around the plant. </p>
                                <p>Plant in a sunny location and space plants apart for good air circulation.</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/planting/flower-pot.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }                
                {
                    step == 4 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Step 4:</h1>
                                <h2>Care for the flowers!</h2>
                                <p>To keep the flowers healthy and attractive to bees, you'll need to care for them. Here are some tips:</p>
                                <ul>
                                    <li>Water the flowers regularly, especially during dry spells</li>
                                    <li>Mulch around the plants to help retain moisture</li>
                                    <li>Remove the dried out dead heads</li>
                                    <li>Fertilize the flowers with a balanced fertilizer</li>
                                    <li>Monitor the plants for pests and take action if necessary</li>
                                </ul>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/planting/watering-can.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
                {
                    step == 5 && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1>Step 5:</h1>
                                <h2>Enjoy the bees!</h2>
                                <p>Once your flowers are in bloom, you should start to see bees visiting them.</p>
                                <p>Sit back and enjoy the show! Watching bees pollinate flowers can be a fun and educational experience.</p>
                                <p>By planting flowers for bees, you're helping to provide habitat and food for these important pollinators. So get outside and start planting!</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/planting/bee.png' alt="happy mascot" width={208} height={208} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.rightButtonCol}>
                <Close onClick={onClose} />
                { step > 0 && step !== 5 && <Next onClick={handleNext} /> }
            </div>
        </div>
    );
}