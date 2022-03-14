// creating a props for button as a component

import React from "react";

export default function Button(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}
