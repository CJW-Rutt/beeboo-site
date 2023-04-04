import Image from 'next/image'
import styles from './TextBubble.module.css'
import Quiz from '../Quiz'
import TeamPage from '../team-page'

export default function TextBubble({ component }) {
  const renderContent = () => {
    switch (component) {
      case 'quiz':
        return (
          <Quiz />
        )
      case 'learning':
        return (
          <div className={styles.learningStyle}>
            <p>Example</p>
            <Image src='/imagehere.png' alt='/placeholder-image' height={200} width={200} />
          </div>
        )
        case 'team':
          return (
            <div>
              <TeamPage />
            </div>
          )
      default:
        return null
    }
  }

  return (
    <div style={{ position: 'relative', width: '800px', height: '365px' }}>
      <Image src='/text-bubble.png' alt='text-bubble' height={365} width={800} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '3.063rem',
          width: '94%',
          height: '100%',
        }}
      >
        {renderContent()}
      </div>
    </div>
  )
}
