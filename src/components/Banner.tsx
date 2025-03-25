"use client";
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Banner() {
  const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg"];
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.banner} onClick={() => setIndex(index + 1)}>
      <Image
        src={covers[index % 3]} //path
        alt="cover" // text represent pic
        fill={true} // to fit in page
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1 className="text-5xl font-bold">
          Experience The Heart of The Nature
        </h1>
        <h3 className="text-3xl "> Book your Campground today!</h3>
      </div>
      <Link
        href="/campground" 
        className="bg-[#FFE492] text-[#043872] border-[#043872]
             py-2 px-6 m-2 rounded-lg z-30 absolute bottom-0 right-0
             shadow-md hover:shadow-lg hover:bg-[#FFD966] hover:border-transparent 
             font-semibold text-lg transition-all duration-300 ease-in-out">
        Select your Campground NOW!
      </Link>
    </div>
  );
}
