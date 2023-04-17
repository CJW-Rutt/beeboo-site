import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./Learn.module.css"
import LearnCard01 from '../LearnCard01';
import LearnCard02 from '../LearnCard02';
import InfoPestsClimate from '../InfoPestsClimate';
import InfoPollination from '../InfoPollination';
import TextBubble from '../TextBubble';

export default function LearnScreen({ image }) {
    const [activeSection, setActiveSection] = useState(null);

    const handleClose = () => {
        setActiveSection(null);
    };

    const handleOpenSection = (section) => {
        setActiveSection(section);
    };

  return (
    <div className={styles.main__container}>

        <div className={styles.container}>

            <div className={styles.left} onClick={() => handleOpenSection('InfoPestsClimate')}>
                <LearnCard01/>
                <Image
                    src="/ui-icons/arrow-02.svg"
                    width={70}
                    height={60}
                />
            </div>

            <div className={styles.right} onClick={() => handleOpenSection('InfoPollination')}>
                <h1 className={styles.h1}>Let's learn together!</h1>
                <div className={styles.right__card}>
                    <LearnCard02/>
                    <Image
                        src="/ui-icons/arrow.svg"
                        width={70}
                        height={60}
                    />

                </div>
            </div>
        </div>
        {activeSection === 'InfoPestsClimate' && (
            <TextBubble onClose={handleClose}>
                <InfoPestsClimate onClose={handleClose} />
            </TextBubble>
        )}
        {activeSection === 'InfoPollination' && (
            <TextBubble onClose={handleClose}>
                <InfoPollination onClose={handleClose} />
            </TextBubble>
        )}
    </div>
  );
}
