import styles from './StatusTripulante.module.css'

export default function StatusTripulante ({ tripulantes }) {
  return (
    <ul className={styles.ul}>
      {tripulantes.map(({ nombre, esImpostor }, index) => (
        <li key={index}>
          {nombre} {esImpostor ? 'SI ' : 'NO '} era el impostor`
        </li>
      ))}
    </ul>
  )
}
