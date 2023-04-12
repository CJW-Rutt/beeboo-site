import styles from './Splash.module.css'
import { useState, useEffect } from "react";
import Image from 'next/image';


export default function SplashScreen(props) {

    const handleFadeIn = (event) => {
        event.target.classList.add('fade-in');
    };

    const [fadeInImage, setFadeInImage] = useState('');

    const [animationFinished, setAnimationFinished] = useState(false);


    useEffect(() => {
        const fadeInTimer = setInterval(() => {

            if (fadeInImage === '') {
                setFadeInImage('cloud01');
            } else if (fadeInImage === 'cloud01') {
                setFadeInImage('cloud02');
            } else if (fadeInImage === 'cloud02') {
                setFadeInImage('logo');
            } else {
                clearInterval(fadeInTimer);
            }

        }, 1000);
    }, [])


    useEffect(() => {

        setTimeout(() => {
        document.getElementById("background").style.opacity = 1;
        }, 0);

    
        setTimeout(() => {
            document.getElementById("cloud01").style.opacity = 1;
        }, 1000);


        setTimeout(() => {
            document.getElementById("cloud02").style.opacity = 1;
        }, 2000);

        setTimeout(() => {
            document.getElementById("logo").style.opacity = 1;
        }, 3000);

        setTimeout(() => {
            document.getElementById("cloud01").style.opacity = 0;
            document.getElementById("cloud02").style.opacity = 0;
            document.getElementById("logo").style.opacity = 0;
          }, 5000);

          setTimeout(() => {
            props.onAnimationEnd();
          }, 9000);

    }, [])

    return(
        <>
            <div id="background" className={styles.background}></div>
            <Image
                id="cloud01"
                className={styles.cloud01}
                src="./splash-screen/cloud01.svg"
                width={200}
                height={100}
                onLoad={handleFadeIn}
            />

            <Image
                id="cloud02"
                className={styles.cloud02}
                src="./splash-screen/cloud02.svg"
                width={200}
                height={100}
                onLoad={handleFadeIn}
            />

            <div id="logo" className={styles.logo}>
                <Image
                    className={styles.boo}
                    src="./splash-screen/boo.svg"
                    width={150}
                    height={150}
                    onLoad={handleFadeIn}
                />
                <h1 className={styles.head}>BeeBoo</h1>
                <p className={styles.subhead}>learning saving the bees</p>
            </div>
            {animationFinished && <div className={styles.hidden}></div>}
        </>
    )
}