export default async function getCampgrounds() {
    const response = await fetch ("http://localhost:5000/api/v1/campgrounds")
    if (!response.ok) {
        throw new  Error("Failed to fetch campgrounds")
    }
    return await response.json()
}