import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 className="title">{props.children}</h1>
      </div>
    </div>
  )
}

export default Title;
