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
            <Image
                className={styles.animatedBee}
                src={src}
                width={200}
                height={100}
            />
        </AnimationWrapper>
    )
}
