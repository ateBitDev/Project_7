import React, { Component } from 'react';
import './css/index.css';
import config from './config.js';
import axios from 'axios';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom'
import Header from './Components/Header'


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
    query: "Cats",
    title: "Cat Results",
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
  console.log('This')
}


handleTag = e => {
  e.preventDefault();
}

performSearch = (query) =>
{
  console.log("Loading")
  axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`)
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
      <Switch>
        <Route exact path="/" render={ () => <Header pics={this.state.pics} data={this.state.cats} query={"Cats"} search={this.performSearch} title={"Cats Results"}/>} />
        <Route path="/Cats" render={ () => <Header pics={this.state.pics} data={this.state.cats} query={"Cats"} search={this.performSearch} title={"Cats Results"}/>}/>
        <Route path="/Dogs" render={ () => <Header pics={this.state.pics} data={this.state.dogs} query={"Dogs"} search={this.performSearch}  title={"Dogs Results"}/>}/>
        <Route path="/Birds" render={ () => <Header pics={this.state.pics} data={this.state.birds} query={"Birds"} search={this.performSearch}  title={"Birds Results"}/>} />
        <Route path="/:Search" render={ () => <Header pics={this.state.pics} data={this.state.pics} query={this.state.query} search={this.performSearch}title={this.state.title}/>}/>}/>
      </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;