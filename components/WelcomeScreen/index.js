import { useState } from "react";
import SplashScreen from "../SplashScreen";
//import styles from "./Welcome.module.css"

export default function WelcomeScreen() {

    const [animationFinished, setAnimationFinished] = useState(false);

    const handleAnimationEnd = () => {
        setAnimationFinished(true);
    };

    return(
        <>
            {!animationFinished && 
                <SplashScreen 
                    onAnimationEnd={handleAnimationEnd}
                />
            }

            {animationFinished && (
                <div className="main-content">
                    <h1>Welcome to my website!</h1>
                    <p>This is my awesome website.</p>
                </div>
            )}

        </>
    )
}