import { useMemo, useState } from 'react'

function EjemploMemo() {
  const [nro1, setNro1] = useState(5)
  const [nro2, setNro2] = useState(10)

  const suma = useMemo(() => {
    console.log('calculando suma')
    return nro1 + nro2
  }, [nro1, nro2]) // La dependencia para que vuelva a calcular el valor

  return (
    <div>
      <h2>Numero1: {nro1}</h2>
      <h2>Numero2: {nro2}</h2>
      <p>Suma: {suma}</p>
      <button onClick={() => setNro1(nro1 + 1)}>Incrementar nro1</button>
      <button onClick={() => setNro2(nro2 + 1)}>Incrementar nro2</button>
    </div>
  )
}

export default EjemploMemo
