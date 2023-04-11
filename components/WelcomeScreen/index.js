import { useState } from "react";
import { useRouter } from 'next/router';

import SplashScreen from "../SplashScreen";
import Image from "next/image";
import WelcomeCard from "../WelcomeCard";
import ButtonGetStarted from "../ButtonGetStarted";
import styles from "./Welcome.module.css"

export default function WelcomeScreen() {

    const router = useRouter();

    function handleClick() {
      router.push('./Carousel');
    }

    const [animationFinished, setAnimationFinished] = useState(false);

    const handleAnimationEnd = () => {
        setAnimationFinished(true);
    };

    return(
        <>
            {!animationFinished && 
                <SplashScreen 
                    onAnimationEnd={handleAnimationEnd}
                />
            }

            {animationFinished && (
                <div className={styles.main__container}>

                    <div>
                        <h1 className={styles.h1}>Welcome!</h1>
                    </div>

                    <div className={styles.card__container}>
                        <Image
                            src='../ui-icons/arrow.svg'
                            width={70}
                            height={60}
                        />
                        <WelcomeCard/>
                    </div>

                    <div className={styles.btn__container}>
                        <Image
                            src='../ui-icons/arrow.svg'
                            width={70}
                            height={60}
                        />
                        <ButtonGetStarted
                            onClick={handleClick}
                        />
                    </div>

                </div>
            )}

        </>
    )
}