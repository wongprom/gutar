import React from 'react'
import "./Button.scss"

const Button = (props) => {
  console.log(props)
  return (
    <button
      onClick={props.action}>
      {props.title}
    </button>)
}

export default Button;