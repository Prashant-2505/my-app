import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to ="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to ="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to ="/about">{props.aboutText}</Link>
              </li>

            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable dark mode`}</label>
            </div>
            <button type="button" className="btn btn-warning mx-5" onClick={props.yellow}>yellow theme</button>
            <button type="button" className="btn btn-success mx-5" onClick={props.green}>green theme</button>

          </div>
        </div>
      </nav>
    </div>
  )
}



// proptype is use to verify that you using prop is valid or not so always make sure to use that check
navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}