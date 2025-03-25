import getCampground from "@/libs/getCampground";
import Image from "next/image";
import Link from "next/link";

export default async function CGDetailPage({params}:{params:{cid:string}}) {
    
    const campgroundDetail = await getCampground(params.cid)
    // const mockCGRepo = new Map()
    // mockCGRepo.set("001",{name:'Phu Lom Lo',image:'/img/PhuLomLo.jpg'})
    // mockCGRepo.set("002",{name:'White Bear Camping',image:'/img/WhiteBearCamping.jpg'})
    // mockCGRepo.set("003",{name:'Area25 Khaoyai',image:'/img/Area25Khaoyai.jpg'})
    // mockCGRepo.set("004",{name:'Kong Nium Temple Viewpoint',image:'/img/KongNiumTempleViewpoint.jpg'})

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-5">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 p-20 rounded-lg shadow-lg w-full max-w-4xl ">
        {/* Campground Image */}
        <Image
          src={campgroundDetail.data.picture}
          alt="Campground Picture"
          width={600}
          height={400}
          sizes="100vw"
          className="rounded-lg  md:w-[30%] lg:w-[40%] h-auto bg-black shadow-md"
        />

        {/* Campground Details */}
        <div>
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-6xl font-bold text-gray-800">
              {campgroundDetail.data.name}
            </h2>
            <p className="text-6xl text-gray-700">
              <span className="font-semibold">Address:</span>{" "}
              {campgroundDetail.data.address}
            </p>
            <p className="text-2xl text-gray-700">
              <span className="font-semibold">Tel:</span>{" "}
              {campgroundDetail.data.tel}
            </p>{" "}
          </div>
          <div>
            <Link
              href="/booking"
              className="px-6 py-2 bg-[#043873] text-[#FFE492]
               font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300
               "
            >
              Make Booking
            </Link>
            <Link
              href="/campground"
              className="px-6 py-2 bg-[#FFE492] text-[#043873]
               font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ml-4
               "
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
