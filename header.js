import React from 'react'
import {Link} from "react-router-dom"

export default function header() {
    const navigation={
        backgroundColor: "DodgerBlue",
        color:"red",
    }
  return (
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navigation}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Celestial</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Planets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/meteors">Meteorites</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/planet">Galaxy</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
