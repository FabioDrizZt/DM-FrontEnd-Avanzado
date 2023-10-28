export function PowerList({ list }) {
  console.log(list)
  const arrOfList = Object.keys(list)
  console.log(arrOfList)

  return (
    <ul>
      {arrOfList.map((power) => (
        <li key={power}>{list[power]}</li>
      ))}
    </ul>
  )
}
