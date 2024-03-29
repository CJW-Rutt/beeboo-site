import styles from './ActivitiesMain.module.css'
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import ActivitiesPlanting from '../ActivitiesPlanting';
import ActivitiesMasonBees from '../ActivitiesMasonBees';
import ActivitiesFarmers from '../ActivitiesFarmers';
import Close from '../Close';

export default function ActivitiesMain({ onClose, toggleNavElements }) {
    const [activeComponent, setActiveComponent] = useState('main');
    const [audio, setAudio] = useState();

    const playSound = (audio) => {
        try {
            if (audio) {
                setAudio(audio);
                audio.play();
            }
        } catch (error) {
            console.log("Error playing audio:", error);
        }
    }

    const toggleNavElementsCallback = useCallback((isVisible) => {
        toggleNavElements(isVisible);
    }, [toggleNavElements]);

    const handlePlantingClick = () => {
        setActiveComponent('planting');
        playSound(new Audio('/music/success.mp3'))

    };

    const handleMasonBeeClick = () => {
        setActiveComponent('masonBeeKit');
        playSound(new Audio('/music/success.mp3'))

    };

    const handleSupportLocalClick = () => {
        setActiveComponent('supportLocal');
        playSound(new Audio('/music/success.mp3'))
    };

    const handleClose = () => {
        setActiveComponent('main');
        toggleNavElements(true);
        onClose();
        playSound(new Audio('/music/close.mp3'))
    };

    useEffect(() => {
        toggleNavElementsCallback(false);
    }, [toggleNavElementsCallback]);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'planting':
                return <ActivitiesPlanting onClose={handleClose} onToggleNavElements={toggleNavElementsCallback}/>;
            case 'masonBeeKit':
                return <ActivitiesMasonBees onClose={handleClose} onToggleNavElements={toggleNavElementsCallback} />;
            case 'supportLocal':
                return <ActivitiesFarmers onClose={handleClose} onToggleNavElements={toggleNavElementsCallback}  />;
            default:
                return (
                    <div className={styles.activitiesContainer}>
                        <div className={styles.activitiesColOne}>
                            <h1>What you can do at home!</h1>
                            <h2>The journey does not end here!</h2>
                            <h3>Check out these activities that will support your neighbourhood bees!</h3>
                            <div className={styles.activitiesButtons}>
                                <div onClick={handlePlantingClick} onToggleNavElements={toggleNavElementsCallback}>
                                    <div className={styles.activityButtonPrimary}>
                                        <h2>Planting Flowers</h2>
                                        <Image src="/activities-main/pottedplant.svg" width={60} height={60} />
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                                <div onClick={handleMasonBeeClick} onToggleNavElements={toggleNavElementsCallback}>
                                    <div className={styles.activityButtonPrimary}>
                                        <h2>Mason Bee Kit</h2>
                                        <Image src="/activities-main/apiary.svg" width={60} height={60} />
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                                <div onClick={handleSupportLocalClick} onToggleNavElements={toggleNavElementsCallback}>
                                    <div className={styles.activityButtonPrimary}>
                                        <h2>Support Local</h2>
                                        <Image src="/activities-main/farm.png" width={67} height={67}/>
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.activitiesColTwo}>
                            <div className={styles.closeContainer}>
                                <Close onClick={handleClose} onToggleNavElements={toggleNavElementsCallback} />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return <>{renderComponent()}</>;
}
