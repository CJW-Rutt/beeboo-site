import styles from './ButtonClimateChange.module.css'
import Image from 'next/image'

export default function ButtonClimateChange() {
    return(
        <>
            <div className={styles.btn} >
                <div className={styles.btn__primary}>
                    <div className={styles.content__container}>
                        <h2 className={styles.h2}>Climate Change</h2>
                        <Image
                            src='/pestsclimate/global-warming.svg'
                            width={70}
                            height={70}
                        />
                    </div>
                </div>
                <div className={styles.btn__background}></div>
            </div>
        </>
    )
}
