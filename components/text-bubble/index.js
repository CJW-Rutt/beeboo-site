import Image from 'next/image'
import styles from './text-bubble.module.css'

export default function TextBubble({ component }) {
  const renderContent = () => {
    switch (component) {
      case 'quiz':
        return (
          <div style={styles.quizStyle}>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
          </div>
        )
      case 'learning':
        return (
          <div style={styles.learningStyle}>
            <p>Your text content here</p>
            <Image src='/imagehere.png' height={200} width={200} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div style={{ position: 'relative', width: '800px', height: '365px' }}>
      <Image src='/text-bubble.png' height={365} width={800} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {renderContent()}
      </div>
    </div>
  )
}
