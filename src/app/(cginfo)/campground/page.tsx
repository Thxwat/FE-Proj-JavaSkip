import CGCatalog from "@/components/CGCatalog";
import getCampgrounds from "@/libs/getCampgrounds";

export default async function Campground() {
  const campgrounds = await getCampgrounds();

  return (
    <main
      className=" p-10 min-h-screen overflow-visible"
      style={{ marginTop: "80px" }}
    >
      <div className="flex flex-col justify-center text-center  items-center"
    >
        <h1 className="text-3xl font-semibold">Select Your Campground</h1>
      </div>
      <CGCatalog cgJson={campgrounds} />
    </main>
  );
}
