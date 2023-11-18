import useRickAndMortiApi from './hooks/useRickAndMortiApi'

export default function Characters () {
  // Agregamos la llamada al hook personalizado
  const { character, index, handlerClick } = useRickAndMortiApi()

  return (
    <div>
      <h1>Nombre: {character?.name}</h1>
      <img src={character?.image} alt={character?.name} />
      <p>Index: {index}</p>
      <button onClick={() => handlerClick(-1)}>Anterior</button>
      <button onClick={() => handlerClick(1)}>Siguiente</button>
    </div>
  )
}
