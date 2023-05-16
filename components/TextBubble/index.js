import Image from 'next/image';
import styles from './TextBubble.module.css';
import React from 'react';
import lottie from 'lottie-web'
import { useEffect, createRef  } from 'react'

export default function TextBubble({ children, onClose, toggleNavElements, style }) {
    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { onClose, toggleNavElements })
    );

    let animationContainer1 = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: animationContainer1.current,
          rerender: 'svg',
          loop: true,
          pingpong: true,
          autoplay: true,
          path: './animations/boo-big.json',
        });
    
        return () => anim.destroy();
    }, []);

    return (
        <>
            {open && <div className={styles.overlay} />}
        
            <div 
                style={{ 
                    position: 'absolute', 
                    width: '800px', 
                    height: '365px', 
                    top: '26px', 
                    zIndex: '9999',
                    ...style
                }}
            >

                <div className={styles.layout__container}>
                    {<div className={styles.animation__container} ref={animationContainer1}/>}
                    <Image src="/text-bubble.svg" alt="text-bubble" height={375} width={760} />
                </div>

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '3.063rem',
                        width: '94%',
                        height: '100%',
                    }}
                >
                    {childrenWithProps}
                </div>

            </div>
        </>
    )
}
