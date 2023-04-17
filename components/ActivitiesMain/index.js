import styles from './ActivitiesMain.module.css'
import Image from 'next/image';
import { useState } from 'react';
import ActivitiesPlanting from '../ActivitiesPlanting';
import Close from '../Close';

export default function ActivitiesMain({ onClose }) {
    const [activeComponent, setActiveComponent] = useState('main');

    const handlePlantingClick = () => {
        setActiveComponent('planting');
    };

    const handleMasonBeeClick = () => {
        setActiveComponent('masonBeeKit');
    };

    const handleVisitGardensClick = () => {
        setActiveComponent('visitGardens');
    };

    const handleClose = () => {
        setActiveComponent('main');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'planting':
                return <ActivitiesPlanting onClose={onClose} />;
            case 'masonBeeKit':
                return ("Component Here");
            case 'visitGardens':
                return ("Component Here");
            default:
                return (
                    <div className={styles.activitiesContainer}>
                        <div className={styles.activitiesColOne}>
                            <h1>What you can do at home!</h1>
                            <h2>The journey does not end here!</h2>
                            <h3>Check out these activities that will support your neighbourhood bees!</h3>
                            <div className={styles.activitiesButtons}>
                                <div onClick={handlePlantingClick}>
                                    <div className={styles.activityButtonPrimary}>
                                        <h2>Planting Flowers</h2>
                                        <Image src="/activities-main/pottedplant.png" width={60} height={60} />
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                                <div onClick={handleMasonBeeClick}>
                                    <div className={styles.activityButtonPrimary}>
                                        <h2>Mason Bee Kit</h2>
                                        <Image src="/activities-main/apiary.png" width={60} height={60} />
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                                <div onClick={handleVisitGardensClick}>
                                    <div className={styles.activityButtonPrimary}>
                                        <h2>Visit Gardens</h2>
                                        <Image src="/activities-main/gardens.png" width={67} height={67}/>
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.activitiesColTwo}>
                            <div className={styles.closeContainer}>
                                <Close onClick={onClose} />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return <>{renderComponent()}</>;
}