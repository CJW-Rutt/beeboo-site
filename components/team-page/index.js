import { useState } from "react"
import { teamInfo } from "../../data/team"
import TeamMember from "../team-member"
import Image from "next/image"
import styles from "./team-page.module.css"
import TextBubble from "../TextBubble"
import Close from "../Close"

export default function TeamPage({ onClose }) {

    const [chooseMember, setChooseMember] = useState(true)
    const [data, setData] = useState({ teamInfo })
    const [memberData, setMemberData] = useState()

    return (
        <>
            <div className={styles.content__container}>
                <div className={styles.sizing__container}>
                    {
                        chooseMember ?
                            (
                                <>
                                    <div className={styles.text__container}>
                                        <h1>
                                            Meet the honey-makers!
                                        </h1>
                                        <p className={styles.team__description}>
                                            Thank you for checking out our application! Our team is like a colony of bees, working together to create something amazing. Get to know the busy bees who designed and developed this app just for you!
                                        </p>
                                    </div>
                                </>
                            )
                            : <></>
                    }

                    <div className={styles.team__container}>
                        {
                            chooseMember ?
                                data.teamInfo && data.teamInfo.map((info, index) => {
                                    return (
                                        <div className={styles.member__container} key={index} onClick={() => {
                                            setMemberData(teamInfo[index])
                                            setChooseMember(false)
                                        }}>
                                            <div className={styles.hexagon__content}>
                                                {info.name}
                                                <Image src={info.avatar} height={78} width={78} alt="team member avatar" />
                                            </div>
                                            <Image className={styles.member__hexagon} src="/team/hexagon-base.png" height={140} width={140} alt="hexagon base shape" />
                                            {/* <Image className={styles.hexagon__shadow} src="/team/hexagon-shadow.png" height={140} width={140} alt="hexagon shadow shape" /> */}
                                        </div>
                                    )
                                })
                                :
                                <>
                                    <div className={styles.textbubble__container}>
                                        <TextBubble>
                                            <Image
                                                className={styles.button__close}
                                                src='/ui-icons/close.png'
                                                height={50}
                                                width={50}
                                                onClick={() => setChooseMember(true)}
                                            />
                                            <div className={styles.textbubble__content}>
                                                <TeamMember
                                                    name={memberData.name}
                                                    description={memberData.description}
                                                    avatar={memberData.avatar}
                                                    socialMedia={memberData.socialMedia}
                                                    portfolio={memberData.portfolio} />
                                            </div>
                                        </TextBubble>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}