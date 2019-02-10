import React from 'react'
import '../css/index.css';
import Gallery from '../Components/Gallery'
import {
    Route,
    Switch,
  } from 'react-router-dom'
import Results from '../Components/Results';
import Code404 from '../Components/Code404';



const Header = (props) => 
{
    
return (
    <div className="photo-container">
    <h2>{props.title}</h2>
      <Switch>
        <Route exact path="/" render={ () => <Gallery bool={props.bool} data={props.cats} query={"Cats"} search={props.search} />} />
        <Route path="/Cats" render={ () => <Gallery bool={props.bool}  data={props.cats} query={"Cats"} search={props.search} />}/>
        <Route path="/Dogs" render={ () => <Gallery bool={props.bool} data={props.dogs} query={"Dogs"} search={props.search} />}/>
        <Route path="/Birds" render={ () => <Gallery bool={props.bool} data={props.birds} query={"Birds"} search={props.search} />} />
        <Route exact path= "/:Search"  render={ ({match}) => <Results bool={props.bool} pics={props.pics}  query={match.params.Search} search={props.search} />}/>
        <Route  component={Code404} />
      </Switch>
    </div>
)
}

export default Header