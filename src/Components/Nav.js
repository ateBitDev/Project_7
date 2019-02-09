import React from 'react'
import '../css/index.css';
import {
    Link
  } from 'react-router-dom'

const Nav = (props) => {

return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/Dogs" onFocus={props.tag}>Dogs</Link></li>
                <li><Link to="/Cats" onFocus={props.tag}>Cats</Link></li>
                <li><Link to="/Birds" onFocus={props.tag}>Birds</Link></li>
            </ul>
        </nav>
)
}


export default Nav