import Image from 'next/image';
import Banner from '@/components/Banner' ;
import Card from '@/components/Card';
import styles from './page.module.css' ;


export default function Home() {
  return (
    <main className='bg-white'>
      <Banner/>
      <div style={{
        margin:"20px", 
        display:"flex", 
        flexDirection:"row",
        flexWrap:"wrap", 
        justifyContent:"space-around", 
        alignContent:"space-around"
      }}>
        <Card cgName='Phu Lom Lo' imgSrc='/img/PhuLomLo.jpg'/>
        <Card cgName='White Bear Camping' imgSrc='/img/WhiteBearCamping.jpg'/>
        <Card cgName='Area25 Khaoyai' imgSrc='/img/Area25Khaoyai.jpg'/>
        <Card cgName='Kong Nium Temple Viewpoint' imgSrc='/img/KongNiumTempleViewpoint.jpg'/>     
      </div>
    </main>
  );
}
