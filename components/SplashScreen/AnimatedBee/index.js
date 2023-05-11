import Image from 'next/image'
import AnimationWrapper from '../AnimationWrapper'
import styles from './AnimatedBee.module.css'

export default function AnimatedBee({ delay, duration, src, top, right, bottom, left }) {
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
                <Image
                    className={styles.animatedBee}
                    src={src}
                    width={250}
                    height={125}
                />
                <div className={styles.inner__beeboo}>
                    <h1>Beeboo</h1>
                    <h2>learning to save the bees</h2>
                </div>
            </div>
        </AnimationWrapper>
    )
}
