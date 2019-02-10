import React from 'react'

const NotFound = (props) => {

    let isLoading = props.bool
    let text;

    if(isLoading)
    {
        text = "No Results" 
    }
    else
    {
        text = "Loading..."    
    }

    return (
        <li className="not-found">
        <h3>{text}</h3>
    </li>
    )
}

export default NotFound