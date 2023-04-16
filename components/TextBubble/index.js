import Image from 'next/image';
import styles from './TextBubble.module.css';

export default function TextBubble({ children }) {
    return (
        <div style={{ position: 'relative', width: '800px', height: '365px' }}>
            <Image src="/text-bubble.png" alt="text-bubble" height={365} width={800} />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '3.063rem',
                    width: '94%',
                    height: '100%',
                }}
            >
                {children}
            </div>
        </div>
    );
}
