import TextField from '@mui/material/TextField';
import DateReserve from "@/components/DateReserve";
import {Select, MenuItem} from '@mui/material';
import { getServerSession } from 'next-auth';
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from '../api/auth/[...nextauth]/authOptions';


export default async function Booking() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
  
    const profile = await getUserProfile(session.user.token)
    var createAt = new Date(profile.data.createdAt)
  

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">

            <div className="bg-slate-100 rounded-lg w-fit px-10 py-5 flex flex-col justify-center space-y-2">
                <div className="text-2xl">{profile.data.name}</div>
                <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createAt.toString()}</td></tr>
                </tbody></table>
            </div>

            <div className="text-xl font-medium"> New booking </div>
                
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Name-Lastname</div>
                    <TextField
                        name="Name-Lastname" 
                        label="Name-Lastname" 
                        variant="standard" 
                         fullWidth 
                    />  
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Contact-Number</div>
                    <TextField
                        name="Contact-Number" 
                        label="Contact-Number"
                        variant="standard" 
                        fullWidth 
                    />
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Campground</div>
                    <Select variant="standard" id="venue" className="h-[2em] w-[200px]">
                        <MenuItem value="PhuLomLo">"Phu Lom Lo</MenuItem>
                        <MenuItem value="WhiteBearCamping">White Bear Camping</MenuItem>
                        <MenuItem value="Area25Khaoyai">Area25 Khaoyai</MenuItem>
                        <MenuItem value="KongNiumTempleViewpoint">Kong Nium Temple Viewpoint</MenuItem>
                    </Select>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Camp Date</div>
                <DateReserve/>
            </div>

            <button className="block rounded -md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                shadow -sm text-white" name="Book Campground">
                    Book Campground
            </button>
        </main>
    )
}