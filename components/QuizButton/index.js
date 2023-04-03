import React from 'react';
import Image from 'next/image'

export default function QuizButton ({ answer, src, onClick, fadeOut }) {
    const buttonClass = fadeOut ? 'fadeOut' : '';
    console.log(src);
    return (
        <button onClick={onClick} className={buttonClass}>
        <Image src={src} height={61} width={61} />
        {answer}
        </button>
    );
};

