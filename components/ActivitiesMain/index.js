import styles from './ActivitiesMain.module.css'
import Image from 'next/image';
import { useState } from 'react';
import ActivitiesPlanting from '../ActivitiesPlanting';
import ActivitiesMasonBees from '../ActivitiesMasonBees';
import ActivitiesFarmers from '../ActivitiesFarmers';
import Close from '../Close';

export default function ActivitiesMain({ onClose, toggleNavElements }) {
    const [activeComponent, setActiveComponent] = useState('main');

    const handlePlantingClick = () => {
        setActiveComponent('planting');
    };

    const handleMasonBeeClick = () => {
        setActiveComponent('masonBeeKit');
    };

    const handleSupportLocalClick = () => {
        setActiveComponent('supportLocal');
    };

    const handleClose = () => {
        setActiveComponent('main');
        toggleNavElements();
        onClose();
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'planting':
                return <ActivitiesPlanting onClose={handleClose} toggleNavElements={toggleNavElements} />;
            case 'masonBeeKit':
                return <ActivitiesMasonBees onClose={handleClose} toggleNavElements={toggleNavElements} />;
            case 'supportLocal':
                return <ActivitiesFarmers onClose={handleClose} toggleNavElements={toggleNavElements}  />;
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
                                        <Image src="/activities-main/pottedplant.svg" width={60} height={60} />
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                                <div onClick={handleMasonBeeClick}>
                                    <div className={styles.activityButtonPrimary}>
                                        <h2>Mason Bee Kit</h2>
                                        <Image src="/activities-main/apiary.svg" width={60} height={60} />
                                    </div>
                                    <div className={styles.activityButtonBackground} />
                                </div>
                                <div onClick={handleSupportLocalClick}>
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
                                <Close onClick={handleClose} />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return <>{renderComponent()}</>;
}
