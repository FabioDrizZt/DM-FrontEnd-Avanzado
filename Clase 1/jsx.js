const element = <h1>Hello world</h1>;

const nombre = "Usuario";
const elemento = <h1>Hola, {nombre}!</h1>;

function Saludo(props) {
  return (
    <h1>
      {/* Comentarios en JSX */}
      Hola, {props.nombre}, su edad es: {props.edad} !
    </h1>
  );
}

const nuevoElemento = <Saludo nombre={nombre} edad="26" />;

const numeros = [1, 2, 3, 4, 5];

const listaNumeros = (
  <ul>
    {numeros.map((numero) => (
      <>
        <li key={numero}>{numero}</li>
        <a href="http://google.com"> Enlace</a>
      </>
    ))}
  </ul>
);

console.log(nuevoElemento);
