import Image from 'next/image';
import styles from './TextBubble.module.css';
import React from 'react';

export default function TextBubble({ children, onClose, toggleNavElements, style }) {
    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { onClose, toggleNavElements })
    );

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
                    <Image className={styles.boo} src="/mascot/boo-happy-right.svg" height={200} width={200}/>
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
