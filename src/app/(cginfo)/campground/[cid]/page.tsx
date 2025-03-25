import getCampground from "@/libs/getCampground";
import Image from "next/image";
import Link from "next/link";

export default async function CGDetailPage({
  params,
}: {
  params: { cid: string };
}) {
  const campgroundDetail = await getCampground(params.cid);
  console.log("Detail is ", campgroundDetail);

  return (
    <main>
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 p-20 rounded-lg shadow-lg w-full max-w-4xl "
        style={{
          justifyContent: "center",
          padding: "10px",
          gap: "2rem",
          marginTop: "70px",
        }}
      >
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
          <div
            className="text-center md:text-left space-y-8"
            style={{
              textAlign: "left",
              marginBottom: "2rem", // This is for the space-y-8 effect
              width: "468px",
            }}
          >
            <h2
              className="text-5xl font-bold text-gray-800"
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              {campgroundDetail.data.name}
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 550,
                color: "#000000",
              }}
            >
              <span className="text-[30px] ">Address:</span>{" "}
              {campgroundDetail.data.address}
            </p>
            <p
              className="text-4xl text-gray-700"
              style={{
                fontSize: "1.5rem",
                fontWeight: 550,
                color: "#000000",
              }}
            >
              <span className="font-thin">Tel:</span>{" "}
              {campgroundDetail.data.tel}
            </p>{" "}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column", // Stack the items vertically
              alignItems: "flex-start", // Align items to the left
              gap: "1rem", // Adjust space between the buttons
            }}
          >
            <Link
              href="/booking"
              className="px-6 py-2 bg-[#043873] text-[#FFE492]
               font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300
               "
              style={{ backgroundColor: "#043873" }}
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
