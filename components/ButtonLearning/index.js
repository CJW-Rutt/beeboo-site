import styles from './ButtonLearning.module.css'
import Link from 'next/link'

export default function ButtonLearning() {
    return (
        <>
            <Link href="/" style={{'text-decoration':'none', 'display':'flex', 'justify-content':'center'}} >
                <div className={styles.learningButton}>
                    Lets Review Together!
                </div>
                <div className={styles.learningButtonBackround}>

                </div>
            </Link>
        </>
    );
}