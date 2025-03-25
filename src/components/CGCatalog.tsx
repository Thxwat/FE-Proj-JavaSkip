import Link from "next/link";
import Card from "./Card";
import { cgJson } from "../../interface";
import { cgItem } from "../../interface";

export default function CGCatalog({cgJson}:{cgJson:cgJson}) {

    return (
        <>
            Explore {cgJson.count} Campgrounds in our catalog
            <div style={{margin:"20px", display:"flex", 
                flexDirection:"row", alignContent:"space-around",
                justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                    {
                        cgJson.data.map((cgItem:cgItem)=>(
                            <Link href={`/campground/${cgItem.id}`} className="w-1/5">
                                <Card cgName={cgItem.name} imgSrc={cgItem.picture}/>
                            </Link>
                        ))
                    }
            </div>
        </>
    )
}