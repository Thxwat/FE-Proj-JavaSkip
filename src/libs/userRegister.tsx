export default async function userRegister(
  name: string,
  tel: string,
  email: string,
  password: string
) {
  console.log(email, password, name, tel);
  const response = await fetch("http://localhost:5000/api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      role: "user",
      tel: tel,
      email: email,
      password: password,
    }),
    //   mode: "cors", // Enable CORS
    //   credentials: "include", // Include cookies if needed
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }
  return await response.json();
}
