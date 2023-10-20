export default function Saludo (props) {
  return (
    <p>
      {props.children}:<strong> {props.nombre}</strong>
      <em> {props.apellido}</em>
    </p>
  )
}
