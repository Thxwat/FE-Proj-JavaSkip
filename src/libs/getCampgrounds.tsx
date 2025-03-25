export default async function getCampgrounds() {
    const response = await fetch ("https://be-campground.vercel.app/api/v1/campgrounds")
    
    
    if (!response.ok) {
        throw new  Error("Failed to fetch campgrounds")
    }

    const data = await response.json()
    // console.log(data)
    return data
}