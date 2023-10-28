// ¡Esto es un componente React!
const Button = () =>
  React.createElement(
    'button',
    { onClick: () => window.alert('Has hecho click!') },
    'Haz Click!'
  )

// Seleccionamos el div dentro de nuestro index.html
const domContainer = document.getElementById('button_container')

// Aquí llamamos a un método de React que crea la base
// para poder utilizar la librería dentro de nuestro <div>.
const root = ReactDOM.createRoot(domContainer)
// Con el método render vamos a mostrar el componente Button
root.render(React.createElement(Button))
