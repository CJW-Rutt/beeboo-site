import styles from './InfoPestsClimate.module.css'
import Close from '../Close'
import Next from '../Next'
import Previous from '../Previous'
import { useState } from 'react'
import Image from 'next/image'

export default function InfoPestsClimate({ onClose, toggleNavElements }) {
    const [step, setStep] = useState(0)
    const [topic, setTopic] = useState("");

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

    return (
        <div className={styles.plantContainer}>
            <div className={styles.backButton}>
                {step !== 0 && <Previous onClick={() => {
                    setTopic("")
                    handlePrevious()
                }} />}
            </div>
            <div className={styles.contentContainer}>
                {
                    step == 0 && topic === "" && (
                        <div className={styles.introContainer}>
                            <h1>
                                Did you know bees need your help?
                            </h1>
                            <p>
                                Bees are amazing friends that help nature. They're like little gardeners!
                            </p>
                            <h2>
                                But bees are in trouble because of two big problems:
                            </h2>
                            <div className={styles.plantingStart}
                                onClick={() => {
                                    setTopic("pesticides")
                                    handleNext()
                                }}>
                                Pesticides
                            </div>
                            <div className={styles.plantingStart}
                                onClick={() => {
                                    setTopic("climate change")
                                    handleNext()
                                }}>
                                Climate Change
                            </div>
                            <div className={styles.plantingStartBackground}></div>
                        </div>
                    )
                }
                {
                    topic === "pesticides" && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1 className={styles.info__title}>Pesticides</h1>
                                <p className={styles.info__text}>Pesticides are chemicals that farmers use to keep bugs away from their crops. These chemicals can be bad for
                                    bees because when they fly from flower to flower, they
                                    might accidentally pick up some of the chemicals.
                                    Yuck! It's like if you got sprayed with stinky bug
                                    spray and didn't feel so good.</p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/pestsclimate/pesticide.png' alt="pesticide graphic" width={194} height={194} />
                            </div>
                        </div>
                    )
                }
                {
                    topic == "climate change" && (
                        <div className={styles.innerContentContainer}>
                            <div className={styles.contentColLeft}>
                                <h1 className={styles.info__title}>
                                    Climate Change
                                </h1>
                                <p className={styles.info__text}>
                                    Climate change is when the weather gets warmer and the world changes a lot. This can make it harder for bees
                                    to find the flowers they need to get nectar and
                                    pollen. It's like if you went to a birthday party
                                    but there was no cake or ice cream. <br />No fun!
                                </p>
                            </div>
                            <div className={styles.contentColRight}>
                                <Image src='/pestsclimate/global-warming.png' alt="global warming graphic" width={194} height={194} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.rightButtonCol}>
                <Close onClick={onClose} />
            </div>
        </div>
    );
}