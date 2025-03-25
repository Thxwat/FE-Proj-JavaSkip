import CardPanel from "@/components/CardPanel";

export default function Campground() {
  return (
    <main className="  p-10 pt-[150px] min-h-screen">
      <div className="flex flex-col  mb-4 justify-center text-center  items-center">
        <h1 className="text-3xl font-semibold">Select Your Campground</h1>
      </div>
      <CardPanel />
    </main>
  );
}
