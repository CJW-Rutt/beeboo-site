import Image from "next/image"
import styles from "./team-member.module.css"

export default function TeamMember({ name, avatar, description, socialMedia, portfolio }) {
    return (
        <>
            <div className={styles.content__container}>
                <div className={styles.container__top}>
                    <Image src={avatar} height={141} width={144} />
                    <div className={styles.desc__container}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={styles.container__bottom}>
                    <div className={styles.socials__container}>
                        {
                            socialMedia.map((info, index) => {
                                return (
                                    <div className={styles.social} key={index}>
                                        <Image src={info.img} height={39} width={39}/>
                                        {info.platform}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.portfolio__container}>
                        {portfolio}
                    </div>
                </div>
            </div>
        </>
    )
}