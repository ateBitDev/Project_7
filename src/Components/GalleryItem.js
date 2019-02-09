import React from 'react'
import '../css/index.css';

const GalleryItem = (props) =>
(
    <li>
        <img src={props.url} alt="" />
    </li>
)

export default GalleryItem