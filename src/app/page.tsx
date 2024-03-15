"use client"

import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState
} from "react"

export default function Home() {
  const [response, setResponse] = useState(null)

  // const Request = async () => {
  //   try {
  //     const result = await axios.get(
  //       `https://perenual.com/api/species-list?key=sk-uP4E65f243b96643e4567`,
  //       { someData: "test" }
  //     ) // Replace the data with your actual payload
  //     setResponse(result.data)
  //   } catch (error) {
  //     console.error("Error occured:", error)
  //     setResponse(error.message)
  //   }
  // }

  async function getData() {
    const res = await fetch(
      "https://perenual.com/api/species-list?key=sk-uP4E65f243b96643e4567"
    )

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()

    setResponse(data)
  }

  return (
    <div>
      <button onClick={getData}>Download</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  )
}
