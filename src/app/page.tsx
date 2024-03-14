export default async function Home() {
  const staticData = await fetch(
    `https://perenual.com/api/species-list?key=sk-uP4E65f243b96643e4567`,
    { cache: "force-cache" }
  )

  const plants = [
    { id: 1, name: "tree" },
    { id: 2, name: "bush" },
    { id: 3, name: "fig" }
  ]

  function List() {
    const listItems = plants.map((plant) => (
      <li key={plant.id}>{plant.name}</li>
    ))
    return <ul>{listItems}</ul>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hi</h1>
      <ul>
        <List />
      </ul>
    </main>
  )
}
