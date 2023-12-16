import logo from '../assets/Logo-Pokemon.png'
export default function Main () {
  return (
    <section className='main-container'>
      <h1 className='main-title'>¡Bienvenido a la Página de Pokémon!</h1>
      <img className='pokemon-logo' src={logo} alt='Logo de Pokémon' />
      <p className='main-text'>
        ¡Explora el maravilloso mundo de los Pokémon y descubre todas sus
        habilidades y características! sectioniértete explorando los diferentes
        tipos de Pokémon, capturando nuevos amigos y enfrentando emocionantes
        batallas.
      </p>
    </section>
  )
}
