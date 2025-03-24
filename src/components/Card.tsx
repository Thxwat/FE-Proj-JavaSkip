import Image from 'next/image';
import InteractiveCard from './InteractveCard';

export default function Card({ cgName, imgSrc}:{cgName:string, imgSrc:string}) {
    
    return (
        <InteractiveCard contentName={cgName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image 
                    src={imgSrc}
                    alt='Campground Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-[10px] font-medium text-black'>{cgName}</div>
        </InteractiveCard>
    )
}