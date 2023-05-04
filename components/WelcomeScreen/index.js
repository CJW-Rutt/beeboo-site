import SplashScreen from "../SplashScreen";
import Image from "next/image";
import WelcomeCard from "../WelcomeCard";
import ButtonGetStarted from "../ButtonGetStarted";
import styles from "./Welcome.module.css"

export default function WelcomeScreen({ onGetStartedClick }) {

    return(
        <>
            <div className={styles.main__container}>

                <div>
                    <h1 className={styles.h1}>Welcome!</h1>
                </div>

                <div className={styles.card__container}>
                    <Image
                        src='../ui-icons/arrow.svg'
                        width={70}
                        height={60}
                    />
                    <WelcomeCard/>
                </div>

                <div className={styles.btn__container}>
                    <Image
                        src='../ui-icons/arrow.svg'
                        width={70}
                        height={60}
                    />
                    <ButtonGetStarted
                        onClick={onGetStartedClick}
                    />
                </div>

            </div>

        </>
    )
}