import Link from "next/link";
import Card from "./Card";

export default function CGCatalog({cgJson}:{cgJson:Object}) {
    return (
        <>
            Explore{cgJson.count} Campgrounds in our catalog
            <div style={{margin:"20px", display:"flex", 
                flexDirection:"row", alignContent:"space-around",
                justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                    {
                        cgJson.data.map((cgItem:Object)=>(
                            <Link href={`/campground/${cgItem.id}`} className="w-1/5">
                                <Card cgName={cgItem.model} imgSrc={cgItem.picture}/>
                            </Link>
                        ))
                    }
            </div>
        </>
    )
}