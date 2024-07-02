import React from "react";

function Text(props) {
  return <span className={props.className}>{props.text}</span>;
}

export default Text;
