import {createSlice} from "@reduxjs/toolkit"
import { BookingItem } from "../../../interface"
import { PayloadAction } from "@reduxjs/toolkit"


type CartState = {
    cgItems: BookingItem[]
}

const initialState:CartState = {cgItems: []}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            state.cgItems.push(action.payload)
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=>{
            const remainItems = state.cgItems.filter(obj =>{
                return ((obj.campground !== action.payload.campground)
                ||(obj.checkIn !== action.payload.checkIn)
                ||(obj.checkOut !== action.payload.checkOut));
            })
            state.cgItems = remainItems
        }
    }
})
export const {addBooking, removeBooking} = cartSlice.actions
export default cartSlice.reducer