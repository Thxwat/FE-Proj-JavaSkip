import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";
import { User } from "../../../interface";

type BookingState = {
    bookingItems: BookingItem[]
}
type UserState = {
    uerItems: User[]
}

const initialState: BookingState = { bookingItems:[] }
const initialUserState: UserState = { uerItems:[] }

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<BookingItem>)=>{
            state.bookingItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<BookingItem>)=>{
            const remainItems = state.bookingItems.filter( obj => {
                return ( (obj.campground !== action.payload.campground) 
                || (obj.checkIn !== action.payload.checkIn)
                || (obj.checkOut !== action.payload.checkOut) )
            })
            state.bookingItems = remainItems
        },
        updateBookingState: (state, action: PayloadAction<BookingItem>) => {
            const index = state.bookingItems.findIndex(b => b._id === action.payload._id );
            if (index !== -1) {
                state.bookingItems[index].campground = action.payload.campground;
                state.bookingItems[index].checkIn = action.payload.checkIn;
                state.bookingItems[index].checkOut = action.payload.checkOut;
            }
        },
    }
})

export const {addReservation, removeReservation ,updateBookingState } = bookSlice.actions
export default bookSlice.reducer