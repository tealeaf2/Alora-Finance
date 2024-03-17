import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/index.css";
import "../styles/App.css";

export default function Button({link, text, buttonClassName}) {
  return(
    <Link to={link}>
      <button
      className={buttonClassName}
      >
        {text}
      </button>
    </Link>
  )
}