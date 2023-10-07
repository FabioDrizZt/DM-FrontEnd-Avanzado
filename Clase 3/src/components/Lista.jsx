import { Fragment } from "react";

export default function Lista(props) {
  return (
    <Fragment>
      <h2>{props.titulo}</h2>
      <ul>
        {props.children.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </Fragment>
  );
}
