import React, { Component } from 'react';
import './css/index.css';
import config from './config.js';
import axios from 'axios';
import {
  Route,
  Link,
  NavLink,
  BrowserRouter
} from 'react-router-dom'
import NotFound from './Components/NotFound'


//Importing Components
import Header from './Components/Header';

class App extends Component {

constructor()
{
  super()

  this.state = {
    pics:[],
    query: "Cats"
  }
}

componentDidMount()
{
  this.performSearch(this.state.query);
}

handleTag = e => {
  e.preventDefault();
  this.performSearch(e.target.textContent);
}



performSearch = (query) =>
{
  axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0e643e2fbfda782d581f49f99861bb54&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
      this.setState({
          pics: response.data.photos.photo
        })
        console.log(this.state.pics);
        this.setState({query : query});
    })
    .catch(error => 
      {
        console.log('Error fetching and parsing data', error);
      });
}

  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Header tag={this.handleTag} pics={this.state.pics} query={this.state.query} search={this.performSearch} />
        <Route component={ NotFound }/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;