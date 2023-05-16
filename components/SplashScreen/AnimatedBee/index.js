import AnimationWrapper from '../AnimationWrapper'
import styles from './AnimatedBee.module.css'
import lottie from 'lottie-web'
import { useEffect, createRef  } from 'react'

export default function AnimatedBee({ delay, duration, src, top, right, bottom, left }) {

    let animationContainer1 = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: animationContainer1.current,
          rerender: 'svg',
          loop: true,
          pingpong: true,
          autoplay: true,
          path: './animations/boo.json',
        });
    
        return () => anim.destroy();
    }, []);

    return (
        <AnimationWrapper
            delay={delay}
            duration ={duration}
            wrapperStyle={styles.animatedBeeWrapper}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
        >
            <div className={styles.main__beeboo}>
                {<div 
                    className={styles.animation__container} 
                    ref={animationContainer1}
                />}
                <div className={styles.inner__beeboo}>
                    <h1>Beeboo</h1>
                    <h2>learning to save the bees</h2>
                </div>
            </div>
        </AnimationWrapper>
    )
}
