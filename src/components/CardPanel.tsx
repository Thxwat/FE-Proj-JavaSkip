"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useRef } from "react";

export default function CardPanel() {
  let countRef = useRef(0);

  const mockCGRepo = [
    { cid: "001", name: "Phu Lom Lo", image: "/img/PhuLomLo.jpg" },
    {
      cid: "002",
      name: "White Bear Camping",
      image: "/img/WhiteBearCamping.jpg",
    },
    { cid: "003", name: "Area25 Khaoyai", image: "/img/Area25Khaoyai.jpg" },
    {
      cid: "004",
      name: "Kong Nium Temple Viewpoint",
      image: "/img/KongNiumTempleViewpoint.jpg",
    },
  ];

  return (
    <div>
      <div className="m-5 flex flex-row flex-wrap justify-around content-around">
        {mockCGRepo.map((cgItem) => (
          <Link href={`/campground/${cgItem.cid}`} className="w-1/5">
            <Card cgName={cgItem.name} imgSrc={cgItem.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
