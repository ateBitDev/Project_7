import React, { Component } from 'react';
import '../css/index.css';
import config from '../config.js';
import axios from 'axios';
import SearchForm from "../Components/SearchForm"
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import {BrowserRouter} from 'react-router-dom'

//Importing Components

class App extends Component {

constructor()
{
  super()

  this.state = {
    pics:[],
    dogs:[],
    cats:[],
    birds:[],
    query: "Loading...",
    title: "React Gallery App",
    search: false

  }
}

componentDidMount()
{
  axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      cats: response.data.photos.photo
    })
    })
    .catch(error => 
      {
        console.log('Error fetching and parsing data', error);
      });
      axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      dogs: response.data.photos.photo
    })
    })
    .catch(error => 
      {
        console.log('Error fetching and parsing data', error);
      });
      axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=birds&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          birds: response.data.photos.photo
        })
        })
        .catch(error => 
          {
            console.log('Error fetching and parsing data', error);
          });
}


componentWillUnmount()
{
  console.log('Dismount')
}


handleTag = e => {
  e.preventDefault();
  this.setState({query : e.target.textContent});
  this.setState({title : e.target.textContent + " Results"});
  
}

performSearch = (query) =>
{
  console.log("Loading")
  console.log(query)
  axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      pics: response.data.photos.photo
    })
    this.setState({search: true})    
    if (this.state.pics.length !== 0)
    {
      this.setState({query : query});
      this.setState({title : query + " Results"});
    }
    else 
    {  
      this.setState({title : ""});
      this.setState({query : ""});
      }

    })
    .catch(error => 
      {
        console.log('Error fetching and parsing data', error);
      });
      console.log("Loaded")
}

  render() {
    return (
      <BrowserRouter>
      <div className="container">
      <SearchForm search={this.performSearch}/>
      <Nav tag={this.handleTag} search={this.performSearch} />
      <Header config={config} bool={this.state.search} pics={this.state.pics} cats={this.state.cats} dogs={this.state.dogs} birds={this.state.birds} query={this.state.query} search={this.performSearch}title={this.state.title}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;