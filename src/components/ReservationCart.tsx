"use client"
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeReservation } from "@/redux/features/cartSlice";
import { useSession } from "next-auth/react";
import { deleteBooking } from "@/libs/deleteBooking";
import { BookingItem } from "../../interface";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "../../interface";

export default function ReservationCart() {
    const router = useRouter();
    const { data: session } = useSession();
    const bookItems = useAppSelector((state) => state.cartSlice.bookingItems);
    const dispatch = useDispatch<AppDispatch>();
    const [error, setError] = useState<string | null>(null);

    const handleRemoveReservation = async (bookItem: BookingItem) => {
        // Detailed logging for debugging
        console.log('Booking Item:', bookItem);
        console.log('Session User:', session?.user);

        // Comprehensive checks for booking removal
        if (!bookItem._id) {
            console.error('Booking ID is missing');
            setError('Booking ID is missing');
            return;
        }

        if (!session?.user) {
            console.error('User session is not available');
            setError('Please log in to remove bookings');
            return;
        }

        if (!session.user.token) {
            console.error('User authentication token is missing');
            setError('Authentication token is missing. Please log in again.');
            return;
        }

        try {
            // Attempt to delete booking from backend
            console.log(bookItem._id)
            await deleteBooking(bookItem._id, session.user.token);
            
            // Remove from Redux store if backend deletion is successful
            dispatch(removeReservation(bookItem));
            
            // Clear any previous errors
            setError(null);
        } catch (error) {
            console.error('Booking deletion failed:', error);
            setError('Failed to remove booking. Please try again.');
        }
    };

    const handleEditReservation = (bookItem: BookingItem) => {
        const hotelData = JSON.stringify(bookItem.campground);
        // Navigate to edit page with booking details
        router.push(`/reservations/edit?id=${bookItem._id}?hotel=${encodeURIComponent(hotelData)}`);
    };

    // Filter bookings to show only the current user's bookings
    const userBookings = bookItems.filter(
        (bookItem) => bookItem.user === session?.user?._id
    );

    return (
        <>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    {error}
                </div>
            )}

            {userBookings.length === 0 ? (
                <div className="text-center text-gray-500 py-5">
                    No reservations in your cart.
                </div>
            ) : (
                userBookings.map((bookItem:BookingItem) => (
                    <div 
                        className="bg-slate-200 rounded px-5 mx-5 py-2 my-3"
                        key={bookItem._id}
                    >
                        <div className="text-xl font-bold underline">{bookItem.campground}</div>
                        <div className="text-sm">Name of the person booking: {bookItem.user}</div>
                        <div className="text-sm">Check-In: {bookItem.checkIn}</div>
                        <div className="text-sm">Check-Out: {bookItem.checkOut}</div>
                        
                        <div className="flex space-x-2 mt-2">
                            <button 
                                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                                text-white shadow-sm" 
                                onClick={() =>{
                                    handleRemoveReservation(bookItem)
                                } 
                                    
                                }
                            >
                                Remove from Cart
                            </button>
                            <button 
                                className="block rounded-md bg-green-600 hover:bg-green-700 px-3 py-2
                                text-white shadow-sm" 
                                onClick={() => {
                                    handleEditReservation(bookItem)
                                    
                                    
                                    }

                                }
                            >
                                Edit Reservation
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
    