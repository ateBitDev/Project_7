import React from 'react'
import GalleryItem from '../Components/GalleryItem'
import NotFound from './NotFound';

const  Gallery = (props) => {

    let results

    if(props.pics.length > 0)
    {
        results = props.pics
    }else
    {
        results = props.data
    }
    

   

    
    let handleData = () =>
    {
        let data = results.map(pic=> {
            let url = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        
                 return <GalleryItem url={url} key={pic.id}/>
                });
        return data
    }
    let pics;
    if (results.length > 0)
    {
        pics = handleData()
    }
    else
    (
        pics = <NotFound />
    )

 

    return(
        <ul>
            {pics}
        </ul>
    )
}

export default Gallery