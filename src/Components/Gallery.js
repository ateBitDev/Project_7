import React from 'react'
import GalleryItem from '../Components/GalleryItem'
import NotFound from '../Components/NotFound'

const  Gallery = (props) => {
console.log(props);

let results = props.data
let  pics = results.map(pic=> {
let url = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;

    return <GalleryItem url={url} key={pic.id}/>
} 
);

    return (
        <ul>
            {pics}
        </ul>
        )
    }

export default Gallery