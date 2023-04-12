import React, { useState, useEffect } from 'react';
import ActivitiesScreen from '../ActivitiesScreen';
import IntroScreen from '../IntroScreen';
import LearnScreen from '../LearnScreen';
import QuizScreen from '../QuizScreen';
import TeamScreen from '../TeamScreen';
import styles from "./Carousel.module.css"


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
    
    const images = [
        <IntroScreen />,
        <LearnScreen />,
        <QuizScreen />,
        <ActivitiesScreen />,
        <TeamScreen />
      ];


    return(
        <>
            <div className={styles.main__container}>

                <div 
                    className={styles.inner__contianer}
                    style={{
                        width: `${100 * images.length}%`,    
                        transform: `translateX(-${(100 / images.length) * currentIndex}%)`
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

            <button onClick={prevImage} className={styles.btn__prev}>Prev</button>

            <button onClick={nextImage} className={styles.btn__next}>Next</button>

            </div>
        </>
    )
}
