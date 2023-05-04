import Image from 'next/image'
import AnimationWrapper from '../AnimationWrapper'
import styles from './AnimatedCloud.module.css'


export default function AnimatedCloud({ delay, duration, src, top, right, bottom, left }) {
    return (
        <AnimationWrapper
            delay={delay}
            duration ={duration}
            wrapperStyle={styles.animatedCloudWrapper}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
        >
            <Image
                className={styles.animatedCloud}
                src={src}
                width={200}
                height={100}
            />
        </AnimationWrapper>
    )
}