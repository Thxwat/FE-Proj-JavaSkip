export default async function userRegister(email: string, password: string, name: string, tel: string) {
    console.log(email, password, name, tel);
    const response = await fetch("https://be-campground.vercel.app/api/v1/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            password: password
        }),
        mode: 'cors', // Enable CORS
        credentials: 'include' // Include cookies if needed
    });

    if (!response.ok) {
        throw new Error("Failed to register user");
    }
    return await response.json();
}