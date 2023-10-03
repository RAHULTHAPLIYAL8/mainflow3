import React from 'react'
import logo from './front.jpg';
import './front.css';

export default function Front(props) {
  return (
    <div>
    <img src={logo} style={{ width: 1362, height: 700}} alt="Norway"></img>
      <div className="text-block">
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}





