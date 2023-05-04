import React, { useState, useEffect } from 'react';
import ActivitiesScreen from '../ActivitiesScreen';
import IntroScreen from '../IntroScreen';
import LearnScreen from '../LearnScreen';
import QuizScreen from '../QuizScreen';
import TeamScreen from '../TeamScreen';
import styles from "./Carousel.module.css"
import Image from 'next/image';


export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        const index = currentIndex === images.length - 1 ? currentIndex : currentIndex + 1;
        setCurrentIndex(index);
    };

    const prevImage = () => {
        const index = currentIndex === 0 ? 0 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const [showNavElements, setShowNavElements] = useState(true);

    const toggleNavElements = (isVisible) => {
        setShowNavElements(isVisible);
    };
    
    const images = [
        <IntroScreen toggleNavElements={toggleNavElements}  />,
        <LearnScreen toggleNavElements={toggleNavElements}  />,
        <ActivitiesScreen toggleNavElements={toggleNavElements} />,
        <QuizScreen toggleNavElements={toggleNavElements}  />,
        <TeamScreen toggleNavElements={toggleNavElements}  />
    ];

    const navigateToIndex = (index) => {
        setCurrentIndex(index);
    }


    return(
        <>
        <div className={styles.outer__container}>
        <div className={styles.main__container}>
            <div 
                className={styles.inner__contianer}
                style={{
                    width: `${100 * images.length}%`,    
                    transform: `translateX(-${(100 / images.length) * currentIndex}%)`,
                }}>

                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            style={{ width: `${100 / images.length}%` 
                            }}>
                            {image}
                        </div>
                    ))}

                </div>
            </div>
            {showNavElements && (
                <div className={styles.nav__buttonrow}>

                    {currentIndex !== 0 && (
                        <Image
                            className={styles.btn__prev}
                            onClick={prevImage}
                            src="./carousel/arrow-right.svg"
                            width={90}
                            height={90}
                        />
                    )}

                    {currentIndex !== images.length - 1 && (
                        <Image
                            className={styles.btn__next}
                            onClick={nextImage}
                            src="./carousel/arrow-left.svg"
                            width={90}
                            height={90}
                        />
                    )}  

                    <div className={styles.navigation}>

                        <Image
                            className={styles.nav__btn}
                            src="./carousel/nav-learn.svg"
                            width={55}
                            height={55}
                            onClick={() => navigateToIndex(1)}
                        />

                        <Image
                            className={styles.nav__btn}
                            src="./carousel/nav-team.svg"
                            width={55}
                            height={55}
                            onClick={() => navigateToIndex(2)}
                        />

                        <Image
                            className={styles.nav__btn}
                            src="./carousel/nav-quiz.svg"
                            width={55}
                            height={55}
                            onClick={() => navigateToIndex(3)}
                        />

                    </div>
                </div>
            )}
        </div>
        </>
    )
}
