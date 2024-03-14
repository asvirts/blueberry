"use client"

import { useState } from "react"
import axios from "axios"

export default function Home() {
  const [response, setResponse] = useState(null)

  const Request = async () => {
    try {
      const result = await axios.get(
        `https://perenual.com/api/species-list?key=sk-uP4E65f243b96643e4567`,
        { someData: "test" }
      ) // Replace the data with your actual payload
      setResponse(result.data)
    } catch (error) {
      console.error("Error occured:", error)
      setResponse(error.message)
    }
  }

  return (
    <div>
      <button onClick={Request}>Download</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  )
}
