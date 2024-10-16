const API_URL = process.env.API_URL || "http://localhost:3000"

export const data = async (endpoint: string) => {
  try {
    const res = await fetch("https://hypehire-assignment.vercel.app" + endpoint)

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json()
  } catch (error) {
    console.log(error)
    throw new Error("There is an error occurred")
  }
}
