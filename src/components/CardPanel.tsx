import Card from '@/components/Card'

export default function CardPanel() {
    return(
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", 
                alignContent:'space-around', justifyContent:'space-around', 
                flexWrap:"wrap", padding:'10px'}}
            >
                <Card cgName='Phu Lom Lo' imgSrc='/img/PhuLomLo.jpg'/>
                <Card cgName='White Bear Camping' imgSrc='/img/WhiteBearCamping.jpg'/>
                <Card cgName='Area25 Khaoyai' imgSrc='/img/Area25Khaoyai.jpg'/>
                <Card cgName='Kong Nium Temple Viewpoint' imgSrc='/img/KongNiumTempleViewpoint.jpg'/>   
            </div>
        </div>
    )
}