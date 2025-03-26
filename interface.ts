import { Types } from "mongoose"

export interface cgItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    picture: string,
    id: string
  }
  
export interface cgJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: cgItem[]
  }

export interface BookingItem {
    _id : Types.ObjectId,
    checkIn : Date,
    checkOut : Date,
    user : Types.ObjectId,
    campground : Types.ObjectId,
    createdAt :Date
}