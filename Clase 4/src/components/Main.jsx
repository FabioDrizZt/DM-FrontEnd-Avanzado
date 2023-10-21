import { Children } from 'react'

export default function Main({ children }) {
  return (
    <main>
      {Children.map(children, (child, index) => (
        <section id={index} key={index}>
          {child}
        </section>
      ))}
    </main>
  )
}
