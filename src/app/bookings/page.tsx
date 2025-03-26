"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import addBooking from "@/libs/addBookings";
import { BookingItem } from "interface";

import DateReserve from "@/components/DateReserve";
import LocationReserve from "@/components/LocationReserve";
import getUserProfile from "@/libs/getUserProfile";
import { addReservation } from "@/redux/features/cartSlice";

export default function Bookings() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const nameCampground = urlParams.get("name");

  // Use NextAuth session
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
  const [checkOut, setCheckOut] = useState<Dayjs | null>(null);
  const [nameLastname, setNameLastname] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [bookingLoading, setBookingLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<any>(null);

  // Handle authentication
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, [isLoading, isAuthenticated, router]);

  // Fetch user profile once session is available
  useEffect(() => {
    if (session?.user?.token) {
      getUserProfile(session.user.token)
        .then((res) => setProfile(res.data))
        .catch((error) => console.error("Profile Fetch Error:", error));
    }
  }, [session]);

  const validateReservationData = () => {
    if (!cid) {
      alert("Campground ID is missing");
      return false;
    }
    if (!checkIn || !checkOut || !nameLastname || !tel) {
      alert("Please fill in all required fields.");
      return false;
    }

    const numOfDays = dayjs(checkOut).diff(dayjs(checkIn), "day");

    if (numOfDays > 3) {
      alert("You cannot book a reservation for more than 3 days.");
      return false;
    }

    if (numOfDays <= 0) {
      alert("Check-out date must be after check-in date.");
      return false;
    }

    return true;
  };

  const makeReservation = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateReservationData()) return;

    setBookingLoading(true);

    const bookingData = {
      userId: session?.user?._id,
      checkIn: dayjs(checkIn).format("YYYY-MM-DD"),
      checkOut: dayjs(checkOut).format("YYYY-MM-DD"),
    };

    try {
      const createdBooking = await addBooking(
        cid,
        bookingData,
        session?.user?.token || ""
      );

      const bookingId = createdBooking.data?._id || createdBooking._id;

      const item: BookingItem = {
        _id: bookingId,
        checkIn: dayjs(checkIn).format("YYYY/MM/DD"),
        checkOut: dayjs(checkOut).format("YYYY/MM/DD"),
        user: session?.user?._id || "",
      };

      dispatch(addReservation(item));

      alert("Reservation successful!");
      router.push("/cart");
    } catch (error) {
      console.error("Reservation Error:", error);
      alert("Failed to make reservation. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!session) return null; // Prevent rendering before session is available

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "630px",
          padding: "1.5rem",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          border: "2px solid #d1d5db",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "35px",
            fontWeight: "bold",
            color: "#4B5563",
          }}
        >
          Booking Form
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {/* Campground Section */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "1rem", color: "#4B5563" }}>Campground</div>
            <LocationReserve />
          </div>

          {/* Date Reserve Section */}
          <div style={{ display: "flex", gap: "35px" }}>
            <div style={{ marginBottom: "1rem", flex: 1 }}>
              <div style={{ fontSize: "1rem", color: "#4B5563" }}>
                Check-in Date
              </div>
              <DateReserve />
            </div>
            <div style={{ marginBottom: "1rem", flex: 1 }}>
              <div style={{ fontSize: "1rem", color: "#4B5563" }}>
                Check-out Date
              </div>
              <DateReserve />
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={makeReservation}
          disabled={bookingLoading}
          style={{
            display: "block",
            padding: "12px 24px",
            backgroundColor: bookingLoading ? "#95a5a6" : "#3498db",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "1.125rem",
            fontWeight: "500",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            cursor: bookingLoading ? "not-allowed" : "pointer",
            border: "none",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
        >
          {bookingLoading ? "Booking..." : "Book now"}
        </button>
      </div>
    </div>
  );
}
