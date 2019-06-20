import React from 'react'
import "./Button.scss"

const Button = (props) => {
  console.log(props);
  // let btnStyle = "backgroundColor: pink;"
  let btn = "btn"

  // let className = 'menu';
  // if (this.props.isActive) {
  //   className += ' menu-active';
  // }
  // return <span className={className}>Menu</span>

  return (
    <button
      className={btn}
      style={props.style}
      onClick={props.action}>
      {props.title}
    </button>)
}

export default Button;