import styles from './InfoPestsClimate.module.css'
import Close from '../Close'
import Next from '../Next'
import Previous from '../Previous'
import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

export default function InfoPestsClimate({ onClose, toggleNavElements }) {
    const [step, setStep] = useState(0)
    const [topic, setTopic] = useState("");

    const toggleNavElementsCallback = useCallback((isVisible) => {
        toggleNavElements(isVisible);
    }, [toggleNavElements]);

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
                {step !== 0 && <Previous onClick={() => {
                    setTopic("")
                    handlePrevious()
                }} />}
            </div>
            <div className={styles.content__container}>
                {
                    step == 0 && topic === "" && (
                        <div className={styles.introContainer}>
                            <h1>Did you know bees need your help?</h1>
                            <p>
                                Bees are amazing friends that help nature. They're like little gardeners!
                            </p>

                            <h2>
                                But bees are in trouble because of two big problems:
                            </h2>

                            <div className={styles.btnContainer}>

                                <div className={styles.btn}
                                    onClick={() => {
                                        setTopic("pesticides")
                                        handleNext()
                                    }}> 
                                    <div className={styles.btn__primary}>
                                        <div className={styles.content__container}>
                                            <h2 className={styles.h2}>Pesticides</h2>
                                            <Image
                                                src='/pestsclimate/pesticide.svg'
                                                width={70}
                                                height={70}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.btn__background}></div>
                                </div>

                                <div className={styles.btn}
                                    onClick={() => {
                                        setTopic("climate change")
                                        handleNext()
                                    }}> 
                                    <div className={styles.btn__primary__2}>
                                        <div className={styles.content__container}>
                                            <h2 className={styles.h2}>Climate Change</h2>
                                            <Image
                                                src='/pestsclimate/global-warming.svg'
                                                width={70}
                                                height={70}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.btn__background__2}></div>
                                </div>

                            </div>

                        </div>
                    )
                }
                {
                    topic === "pesticides" && (

                        <div className={styles.innerContentContainer}>

                            <h1 className={styles.info__title}>Pesticides</h1> 

                            <div className={styles.contentContainer}>
                                <p className={styles.info__text}>
                                    Pesticides are chemicals that farmers use to keep bugs away from their crops.
                                    These chemicals can be <strong>bad for bees</strong> because when they fly from flower to
                                    flower, they might accidentally pick up some of the chemicals. <strong>Yuck! </strong>
                                     It's like if you got sprayed with stinky bug spray and didn't feel so good.
                                </p>

                                <Image src='/pestsclimate/pesticide.svg' alt="pesticide graphic" width={160} height={160} />
                            </div>
                        </div>
                    )
                }
                {
                    topic == "climate change" && (
                        <div className={styles.innerContentContainer}>

                            <h1 className={styles.info__title}>Climate Change</h1>

                            <div className={styles.contentContainer}>
                                <p className={styles.info__text}>
                                    Climate change is when the weather gets warmer and the world changes a lot. 
                                    This can make it <strong>harder for bees to find the flowers</strong> they need to get
                                    nectar and pollen. It's like if you went to a birthday party
                                    but there was no cake or ice cream. <br/> <strong>No fun!</strong>
                                </p>

                                <Image src='/pestsclimate/global-warming.svg' alt="global warming graphic" width={160} height={160} />
                            </div>

                        </div>
                    )
                }
            </div>
            <div className={styles.rightButtonCol}>
                <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback}  />
            </div>
        </div>
    );
}