import Image from "next/image"
import styles from "./boo.module.css"

export default function HappyBoo() {
    return (
        <>
            <Image className={styles.facing__right} src='/mascot/happy.svg' height={146} width={141} />
        </>
    )
}