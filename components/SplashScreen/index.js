import styles from './SplashScreen.module.css'
import AnimatedBackground from './AnimatedBackground'
import AnimatedCloud from './AnimatedCloud'
import AnimatedBee from './AnimatedBee'
import AnimationWrapper from './AnimationWrapper'


export default function SplashScreen({ onAnimationFinished }) {
    return (
        <div className={styles.main__container}>
                <AnimatedBackground duration={1000}/>
                
                <AnimationWrapper
                    delay={6000}
                    duration={1500}
                    animationType={'fadeOut'}
                    onAnimationFinished={onAnimationFinished}
                >
                    <AnimatedCloud top='3rem' right='5rem' delay={1200} duration={1200} src='./splash-screen/cloud02.svg' />
                    <AnimatedCloud bottom='3rem' left='5rem' delay={2500} duration={1200} src='./splash-screen/cloud01.svg' />
                    <AnimatedBee bottom='10rem' delay={3500} duration={1200} src='./splash-screen/boo.svg' />
                </AnimationWrapper>
        </div>
    )
}