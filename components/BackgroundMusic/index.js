import { useState, useEffect } from "react"
import Image from "next/image";
import styles from "./BackgroundMusic.module.css"

export default function BackgroundMusic() {
    const [audio, setAudio] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setAudio(new Audio('/music/bgm.mp3'));
    }, []);

    function handlePlay() {
        audio.volume = 0.3
        audio.play()
        setIsPlaying(true)
    }

    function handlePause() {
        audio.pause()
        setIsPlaying(false)
    }

    return (
        <>
            {
                isPlaying ? (
                    <button onClick={handlePause} className={styles.music__button}>
                        <Image alt="no music icon" src='/music/music.png' height={50} width={50} />
                    </button>
                ) : (
                    <button onClick={handlePlay} className={styles.music__button}>
                        <Image alt="music icon" src='/music/no-music.png' height={50} width={50} />
                    </button>
                )
            }
            <audio src="/music/bgm.mp3" loop />
        </>
    )
}