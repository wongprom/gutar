import React from 'react'
import "./Button.scss"

const Button = (props) => {
  return (
    <button
      onClick={props.action}>
      {props.title}
    </button>)
}

export default Button;