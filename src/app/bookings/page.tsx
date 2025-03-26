'use client'
import DateReserve from "@/components/DateReserve"
import LocationReserve from "@/components/LocationReserve"
import { getServerSession } from 'next-auth';
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import {useState} from 'react'
import { Dayjs } from "dayjs";


export default async function Bookings(){

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
  
    const profile = await getUserProfile(session.user.token)
    var createAt = new Date(profile.data.createdAt)

    return (
        <main className='w-[100%] flex flex-col items-center space-y-4'>
            <div className="text-xl font-medium">Booking Form</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Campground
                </div>
                <LocationReserve/>
                <div className="text-md text-left text-gray-600">
                    Check-in Date
                </div>
                <DateReserve/>
                <div className="text-md text-left text-gray-600">
                    Check-out Date
                </div>
                <DateReserve/>
                
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
                    Book now
            </button>
        </main>
    )
}