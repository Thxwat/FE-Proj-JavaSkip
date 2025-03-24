import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image 
                src={'/img/cover2.jpg'} //path
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