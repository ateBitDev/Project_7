import React from 'react'
import '../css/index.css';
import {
    Route,
    Link,
    NavLink
} from 'react-router-dom'

const Nav = (props) =>
{

    return ( 
    <nav className="main-nav">
    <ul>
    <li><a href="/dogs" onClick={props.tag}>Dogs</a></li>
    <li><a href="/cats" onClick={props.tag}>Cats</a></li>
    <li><a href="/birds"onClick={props.tag}>Birds</a></li>
    </ul>
</nav>
)}

export default Nav