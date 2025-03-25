"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"   

export default function DateReserve(){
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
            w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>

        <Select variant="standard" name="campground" id="campground"
        className="h-[2em] w-[200px]">
            <MenuItem value="PhuLomLo">"Phu Lom Lo</MenuItem>
            <MenuItem value="WhiteBearCamping">White Bear Camping</MenuItem>
            <MenuItem value="Area25Khaoyai">Area25 Khaoyai</MenuItem>
            <MenuItem value="KongNiumTempleViewpoint">Kong Nium Temple Viewpoint</MenuItem>
        </Select>
        </div>
    )
}