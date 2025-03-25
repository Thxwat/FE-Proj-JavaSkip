"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import getCampgrounds from "@/libs/getCampgrounds";
import { cgJson } from "../../interface";
import { cgItem } from "../../interface";

export default function CardPanel() {
  // let countRef = useRef(0);
  const [cardResponse, setCardResponse] = useState<cgJson | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const venues = await getCampgrounds();
      setCardResponse(venues);
    };
    fetchData();
  }, []);
  // const mockCGRepo = [
  //   {
  //     cid: "001",
  //     name: "Phu Lom Lo",
  //     image: "/img/PhuLomLo.jpg" },
  //   {
  //     cid: "002",
  //     name: "White Bear Camping",
  //     image: "/img/WhiteBearCamping.jpg",
  //   },
  //   {
  //     cid: "003",
  //     name: "Area25 Khaoyai",
  //     image: "/img/Area25Khaoyai.jpg"
  //   },
  //   {
  //     cid: "004",
  //     name: "Kong Nium Temple Viewpoint",
  //     image: "/img/KongNiumTempleViewpoint.jpg",
  //   },
  // ];
  if (!cardResponse) return <p>Card Panel is Loading...</p>;

  return (
    <div>
      <div className="m-5 flex flex-row flex-wrap justify-around content-around border-spacing-[20px] overflow-visible">
        {cardResponse.data.map((cgItem: cgItem) => (
          <Link href={`/campground/${cgItem.id}`} className="w-1/5">
            <Card cgName={cgItem.name} imgSrc={cgItem.picture} />
          </Link>
        ))}
      </div>
    </div>
  );
}
