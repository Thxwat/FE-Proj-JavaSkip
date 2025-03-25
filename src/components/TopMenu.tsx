import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";

export default function TopMenu() {
  return (
    <div className={styles.menucontainer}>
      <Link
        href="/"
      >
        <Image
          src={"/img/Logo.png"}
          className={styles.logoimg}
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </Link>

      <div className="m-[30px] flex items-center gap-x-6 ml-auto">
        <TopMenuItem title="Book Now" pageRef="/booking" />
        <TopMenuItem title="My Booking" pageRef="/mybooking" />
        <Link
          href="/Login"
          className="bg-[#FFE492] text-[#043873] font-semibold px-6 py-3 rounded-lg shadow-md 
             hover:bg-[#FFD966] transition-all duration-300 ease-in-out"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
