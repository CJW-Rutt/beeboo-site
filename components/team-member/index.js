import Image from "next/image"

export default function TeamMember({ name, avatar, description, socialMedia, portfolio }) {
    return (
        <>
            <Image src={avatar} height={141} width={144} />
            <h1>{name}</h1>
            <p>{description}</p>
        </>
    )
}