import Image from "next/image"

export default function CGDetailPage({params}:{params:{cid:string}}) {
    
    const mockCGRepo = new Map()
    mockCGRepo.set("001",{name:'Phu Lom Lo',image:'/img/PhuLomLo.jpg'})
    mockCGRepo.set("002",{name:'White Bear Camping',image:'/img/WhiteBearCamping.jpg'})
    mockCGRepo.set("003",{name:'Area25 Khaoyai',image:'/img/Area25Khaoyai.jpg'})
    mockCGRepo.set("004",{name:'Kong Nium Temple Viewpoint',image:'/img/KongNiumTempleViewpoint.jpg'})

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Campground ID {params.cid}</h1>
            <div className="flex flex-row my-5">
                <Image 
                    src={(mockCGRepo.get(params.cid)).image}
                    alt='Campground Picture'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-black'/>
                <div className="text-md mx-5">{(mockCGRepo.get(params.cid)).name}</div>
            </div>
        </main>
    ) 
}

export async function  generateStaticParams() {
    return [ {cid:'001'}, {cid:'002'}, {cid:'003'}, {cid:'004'}]
}