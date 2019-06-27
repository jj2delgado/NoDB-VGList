import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import VideogameList from './components/videogameList'
import Header from './components/header'

class App extends Component {
  constructor(){
    super()

    this.state = {
      favVideoGames: [],
    }
  }
  componentDidMount(){
    axios.get('/api/videogames').then(res => {
      this.setState({favVideoGames: res.data})
      console.log(res.data)
    }).catch(err => {
      console.log('error from server', err)
    })
  }
  addVideoGame(){

  }
  deleteVideoGame(){

  }
  editVideoGame(){

  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <VideogameList />
        <div>
          <input className="imageInput" placeholder="Image URL"/>
          <input className="titleInput" placeholder="Video Game Title"/>
          <input className="reviewInput" placeholder="Your Review"/>
          <input className="ratingInput" placeholder="Your Rating"/>
        </div>
        <div>
          <button>Add Video Game</button>
          <button>Delete Video Game</button>
          <button>Edit Video Game</button>
        </div>
      </div>
    )
  }
  
}

export default App;
