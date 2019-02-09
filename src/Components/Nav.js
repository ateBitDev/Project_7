import React from 'react'
import '../css/index.css';
import {
    NavLink
  } from 'react-router-dom'

const Nav = (props) => {





return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/Dogs" >Dogs</NavLink></li>
                <li><NavLink to="/Cats" >Cats</NavLink></li>
                <li><NavLink to="/Birds" >Birds</NavLink></li>
            </ul>
       
        </nav>

)
}


export default Nav