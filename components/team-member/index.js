import Image from "next/image"
import styles from "./team-member.module.css"
import Link from "next/link"

export default function TeamMember({ name, avatar, description, socialMedia, portfolio }) {
    return (
        <>
            <div className={styles.content__container}>
                <div className={styles.container__left}>
                    <Image src={avatar} height={141} width={144} />
                    <div className={styles.socials__container}>
                        {
                            socialMedia.map((info, index) => {
                                return (
                                    <Link href={info.link} target="_blank">
                                        <div className={styles.social} key={index}>
                                            <Image src={info.img} height={39} width={39} alt="socials icon" />
                                            <p className={styles.social__link}>
                                                {info.platform}
                                            </p>
                                        </div>
                                    </Link>

                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.container__right}>
                    <div className={styles.desc__container}>
                        <h1>{name}</h1>
                        {
                            description.split('<br>').map((info, index) => {
                                return (
                                    <p key={index}>{info}</p>
                                )
                            })
                        }
                        {/* <p>{description}</p> */}
                    </div>
                    <div className={styles.portfolio__container}>
                        <h2 className={styles.portfolio__header}>Portfolio</h2>
                        <div className={styles.portfolio__itemsContainer}>
                            {
                                portfolio.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundImage: `url(${item})`,
                                                width: '95px',
                                                height: '95px',
                                                objectFit: 'cover',
                                                margin: `0`,
                                                border: `1px solid var(--text)`
                                            }}
                                        ></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}