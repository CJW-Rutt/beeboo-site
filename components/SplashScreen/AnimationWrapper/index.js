
import { useEffect } from 'react'
import styles from './AnimationWrapper.module.css'

export default function AnimationWrapper(props) {

    const {
        children,
        animationType = 'fadeIn',
        duration = 'unset',
        delay = 'unset',
        iteration = 'unset',
        timing = 'ease',
        direction = 'normal',
        fill = 'forwards',
        wrapperStyle,
        top = 'unset',
        right = 'unset',
        bottom = 'unset',
        left = 'unset',
        onAnimationFinished,
    } = props 

    const delayTime = delay === 'unset' ? 0 : delay
    const durationTime = duration === 'unset' ? 0 : duration
    const totalTime = delayTime + durationTime

    useEffect(() => {
        if(onAnimationFinished) {
            setTimeout(onAnimationFinished, totalTime)
        }
    }, [])


    const animationClassName = `${styles[animationType]} ${wrapperStyle}`

    const animationStyle = {
        'animation-duration':`${duration}ms`,
        'animation-timing-function': timing,
        'animation-iteration-count': iteration,
        'animation-delay': `${delay}ms`,
        'animation-direction': direction,
        'animation-fill-mode': fill,
        'right': right,
        'top': top,
        'bottom': bottom,
        'left': left,
    }

    return (
        <div 
            className={animationClassName} 
            style={animationStyle}
            children={children}
        />
        
    )
}
