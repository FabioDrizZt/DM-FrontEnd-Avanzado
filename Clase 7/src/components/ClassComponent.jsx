import { Component } from 'react'
const names = ['Pedro', 'Juan', 'Maria', 'Patricia', 'Gloria', 'Pancho']

class ClassComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: null,
      count: 0,
      message: ''
    }
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMessage = () => {
    this.setState({ message: Math.random() * 10 })
  }

  componentDidMount () {
    // 1ER METODO DEL CICLO DE VIDA - AL MONTARSE EL COMPONENTE
    console.log('el componente de clase se monto')
    this.setState({
      name: 'Fabio',
      count: 0,
      message: 'Saludos desde Digital Mind'
    })
    document.title = 'Titulo del Componente de Clase'
    // Llamados a la API para traer datos que se cargan en el componente
  }

  componentDidUpdate (prevProps, prevState) {
    // 2DO METODO DEL CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTES
    console.log('El componente de clase actualizó')
    // Si se actualiza el estado del contador
    if (this.state.count !== prevState.count) {
      this.setState({ name: names[this.state.count % names.length] })
    }
    if (this.state.message !== prevState.message) {
      console.log('Cambio el mensaje')
    }
  }

  componentWillUnmount () {
    // 3ER METODO DEL CICLO DE VIDA - AL DESMONTARSE EL COMPONENTE
    console.log('Demontando el componente de clase...')
    document.title = 'Titulo de mi pagina principal'
  }

  render () {
    return (
      <div>
        <h1>Componente de Clase</h1>
        <h2>El nombre es: {this.state.name}</h2>
        <p>La cuenta va en: {this.state.count}</p>
        <p>El mensaje es: {this.state.message}</p>
        <button onClick={() => this.incrementCount()}>
          Incrementar contador
        </button>
        <button onClick={() => this.handleMessage()}>Cambiar Mensaje</button>
      </div>
    )
  }
}

export default ClassComponent
