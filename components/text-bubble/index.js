import Image from 'next/image'

const quizStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
}

const learningStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}

export default function TextBubble({ component }) {
  const renderContent = () => {
    switch (component) {
      case 'quiz':
        return (
          <div style={quizStyle}>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
          </div>
        )
      case 'learning':
        return (
          <div style={learningStyle}>
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
