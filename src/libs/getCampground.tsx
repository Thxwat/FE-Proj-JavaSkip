export default async function getCampground(id: string) {
    const response = await fetch(`http://localhost:5000/api/v1/campgrounds/${id}`)
    
    
    if(!response.ok) {
        throw new Error("Failed to fetch Campground")
    }
    return await response.json()
}