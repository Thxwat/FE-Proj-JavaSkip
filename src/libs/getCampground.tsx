export default async function getCampground(id: string) {
    const response = await fetch(`https://be-campground.vercel.app/api/v1/campgrounds/${id}`)
    
    console.log(response)
    
    if(!response.ok) {
        throw new Error("Failed to fetch Campground")
    }
    return await response.json()
}