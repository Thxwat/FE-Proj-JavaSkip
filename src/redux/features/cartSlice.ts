import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookingItem, } from "interface";
import { eachBookingItem } from "interface";

type CartState = {
    carItems: BookingItem[]
}

const initialState:CartState = { carItems:[] }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<BookingItem>)=>{
            state.carItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<BookingItem>)=>{
            const remainItems = state.carItems.filter( obj => {
                return ( (obj.checkIn !== action.payload.checkIn)
                || (obj.checkOut !== action.payload.checkOut) )
            })
            state.carItems = remainItems
        },
        updateBookingState: (state, action: PayloadAction<eachBookingItem>) => {
            const index = state.carItems.findIndex(b => b._id === action.payload._id );
            if (index !== -1) {
             
                state.carItems[index].checkIn = action.payload.checkIn;
                state.carItems[index].checkOut = action.payload.checkOut;
          
            }
        },
    }
})

export const {addReservation, removeReservation ,updateBookingState } = cartSlice.actions
export default cartSlice.reducer
