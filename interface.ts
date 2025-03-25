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
    _id : string,
    checkIn: string,
    checkOut: string,
    user : string,
    campground : string
}

export interface User {
  _id : string,
  name : string,
  role : string,
  tel : string,
  email : string,
  password:string,
  createdAt : string
}