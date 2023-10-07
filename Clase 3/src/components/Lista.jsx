import { Fragment } from "react";

export default function Lista({ titulo, children }) {
  return (
    <Fragment>
      <h2>{titulo}</h2>
      <ul>
        {children.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </Fragment>
  );
}
