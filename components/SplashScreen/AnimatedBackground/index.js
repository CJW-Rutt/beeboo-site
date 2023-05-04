import AnimationWrapper from '../AnimationWrapper'
import styles from './AnimatedBackGround.module.css'

export default function AnimatedBackground({ delay, duration, top, right, bottom, left }) {
    return (
        <AnimationWrapper 
            delay={delay}
            duration ={duration}
            wrapperStyle={styles.backgroundWrapper}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
        />
    )
}