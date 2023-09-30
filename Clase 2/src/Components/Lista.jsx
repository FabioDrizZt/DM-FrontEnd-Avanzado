import React from "react";

export default function Lista() {
  const elementos = [
    { id: 1, texto: "elemento1" },
    { id: 2, texto: "elemento2" },
    { id: 3, texto: "elemento3" },
    { id: 4, texto: "elemento4" },
    { id: 5, texto: "elemento5" },
  ];

  const listaNumeros = elementos.map((elemento) => (
    <li key={elemento.id}>{elemento.texto}</li>
  ));

  return (
    <React.Fragment>
      <h1>Lista de elementos</h1>
      <ul>{listaNumeros}</ul>
    </React.Fragment>
  );
}
