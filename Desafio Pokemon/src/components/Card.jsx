import { PowerList } from "./PowerList"

export function Card({ data }) {
  console.log(data)
  return (
    <>
      {data.map((pokemon) => (
        <div key={pokemon.id} className="card">
          <h2>{pokemon.pokemonName}</h2>
          <img src={pokemon.avatar} alt={pokemon.pokemonName} />
          {pokemon.power && <PowerList list={pokemon.power} />}
        </div>
      ))}
    </>
  )
}
