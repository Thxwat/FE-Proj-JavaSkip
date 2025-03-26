"use client";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function LocationReserve() {
  // Initialize state with a valid default value
  const [location, setLocation] = useState("PhuLomLo"); // Default value to avoid undefined

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
      <Select
        variant="standard"
        name="location"
        id="location"
        className="h-[2em] w-[200px]"
        value={location} // Ensures the value is always defined
        onChange={handleLocationChange}
      >
        <MenuItem value="PhuLomLo">Phu Lom Lo</MenuItem>
        <MenuItem value="WhiteBearCamping">White Bear Camping</MenuItem>
        <MenuItem value="Area25Khaoyai">Area25 Khaoyai</MenuItem>
        <MenuItem value="KongNiumTempleViewpoint">
          Kong Nium Temple Viewpoint
        </MenuItem>
      </Select>
    </div>
  );
}
