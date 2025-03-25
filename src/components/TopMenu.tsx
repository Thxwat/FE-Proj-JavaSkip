import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.menucontainer}>
      <Link href="/">
        <Image src={"/img/Logo.png"} className={styles.logoimg} alt="logo" width={0} height={0} sizes="100vh"/>
      </Link>

      <div className="m-[30px] flex items-center gap-x-6 ml-auto">
        <TopMenuItem title="Book Now" pageRef="/reservations" />
        <TopMenuItem title="My Booking" pageRef="/mybooking" />
        {
          session? '': <Link href="/api/auth/register">
            <div className='flex items-center h-full px-2 text-[#FFE492] text-lg'>Register</div>
          </Link>
        }
        {
          session ? <Link href="/api/auth/signout">
            <div className="text-[#FFE492] font-semibold px-6 py-3 rounded-lg shadow-md 
            border-2 border-[#FFE492] hover:bg-[#FFD966] transition-all duration-300 ease-in-out">
              LogOut
            </div>
          </Link> : <Link href="/api/auth/signin">
            <div className="bg-[#FFE492] text-[#043873] font-semibold px-6 py-3 rounded-lg shadow-md 
            hover:bg-[#FFD966] transition-all duration-300 ease-in-out">
              LogIn
            </div>
          </Link>
        }
      </div>
    </div>
  );
}