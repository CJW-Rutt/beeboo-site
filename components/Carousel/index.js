import Image from 'next/image';
import React, { useState } from 'react';
import ActivitiesScreen from '../ActivitiesScreen';
import IntroScreen from '../IntroScreen';
import LearnScreen from '../LearnScreen';
import QuizScreen from '../QuizScreen';
import SplashScreen from '../SplashScreen';
import styles from "./Carousel.module.css"
import TeamScreen from '../TeamScreen';
import WelcomeScreen from '../WelcomeScreen'


export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const moveToNextScreen = () => {
        const index = currentIndex === screens.length - 1 ? currentIndex : currentIndex + 1;
        setCurrentIndex(index);
        setShowNavElements(true)
    };

    const moveToPreviousScreen = () => {
        const index = currentIndex === 0 ? 0 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const [showNavElements, setShowNavElements] = useState(false);

    const toggleNavElements = (isVisible) => {
        setShowNavElements(isVisible);
    };
    
    const screens = [
        <SplashScreen onAnimationFinished={moveToNextScreen}/>,
        <WelcomeScreen onGetStartedClick={moveToNextScreen} />,
        <IntroScreen toggleNavElements={toggleNavElements} />,
        <LearnScreen toggleNavElements={toggleNavElements} />,
        <ActivitiesScreen toggleNavElements={toggleNavElements} />,
        <QuizScreen toggleNavElements={toggleNavElements} />,
        <TeamScreen toggleNavElements={toggleNavElements} />
    ];

    const navigateToIndex = (index) => {
        setCurrentIndex(index);
    }

    const someStyle = {
        width: `${100 * screens.length}%`,    
        transform: `translateX(-${(100 / screens.length) * currentIndex}%)`,
    }

    return(
        <>
            <div className={styles.main__container}>
                <div className={styles.inner__contianer} style={someStyle}>
                    {screens.map((screen, index) => (
                        <div key={index} style={{ width: `${100 / screens.length}%` }} >
                            {screen}
                        </div>
                    ))}
                </div>
            </div>
            {showNavElements && currentIndex >= 2 && ( 
                <div className={styles.nav__buttonrow}>
                    {currentIndex !== 0 && (
                        <CarouselArrowRight onClick={moveToPreviousScreen} />
                    )}

                    {currentIndex !== screens.length - 1 && (
                        <CarouselArrowLeft onClick={moveToNextScreen} />
                    )}  
                    <CarouselNavigationMenu 
                        onClickLearn={() => navigateToIndex(3)}
                        onClickTeam={() => navigateToIndex(4)}
                        onClickQuiz={() => navigateToIndex(5)}
                    />
                </div>
            )}
        </>
    )
}

const CarouselArrowRight = ({ onClick }) => {
    return (
        <Image className={styles.btn__prev} onClick={onClick} src="./carousel/arrow-right.svg" width={90} height={90} />
    )
}

const CarouselArrowLeft = ({ onClick }) => {
    return (
        <Image className={styles.btn__next} onClick={onClick} src="./carousel/arrow-left.svg" width={90} height={90} />
    )
}

const CarouselNavigationMenu = ({ onClickLearn, onClickTeam, onClickQuiz }) => {
    return (
        <div className={styles.navigation}>
            <Image className={styles.nav__btn} src="./carousel/nav-learn.svg" width={55} height={55} onClick={onClickLearn}/>
            <Image className={styles.nav__btn} src="./carousel/nav-team.svg" width={55} height={55} onClick={onClickTeam} />
            <Image className={styles.nav__btn} src="./carousel/nav-quiz.svg" width={55} height={55} onClick={onClickQuiz}/>
        </div>
    )
}
