'use client'
import {useState} from 'react'
import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {

    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)

    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image 
                src={covers[index%3]} //path
                alt='cover' // text represent pic
                fill={true} // to fit in page
                priority 
                objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>where every event finds its venue </h1>
                <h3 className='text-xl font-serif'> Choose your right Venue</h3>
            </div>
        </div>
    );
}