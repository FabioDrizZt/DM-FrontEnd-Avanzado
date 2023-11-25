import { useParams } from 'react-router-dom'

export default function Card ({ products }) {
  const params = useParams()
  const result = products?.find((product) => (product.id === params.id))

  return (
    <article>
      <h2>{result?.title}</h2>
      <img src={result?.thumbnail} alt={result?.title} />
    </article>
  )
}
