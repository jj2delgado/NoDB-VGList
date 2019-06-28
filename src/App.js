import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import VideogameList from './components/videogameList/videogameList'
import Header from './components/header/header'
import './App.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      favVideoGames: [],
      vgimage: '',
      vgtitle: '',
      vgreview: '',
      vgrating: '',
      currentVideogame: {}
    }
    this.handleImageInput = this.handleImageInput.bind(this)
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleReviewInput = this.handleReviewInput.bind(this)
    this.handleRatingInput = this.handleRatingInput.bind(this)
    this.addVideoGame = this.addVideoGame.bind(this)
    this.deleteVideoGame = this.deleteVideoGame.bind(this)
    this.editVideoGame = this.editVideoGame.bind(this)
  }
  componentDidMount(){
    axios.get('/api/videogames').then(res => {
      this.setState({favVideoGames: res.data})
    }).catch(err => {
      console.log('error from server', err)
    })
    console.log(this.state.favVideoGames)
  }
  handleImageInput(e){
    this.setState({vgimage: e.target.value})
  }
  handleTitleInput(e){
    this.setState({vgtitle: e.target.value})
  }
  handleReviewInput(e){
    this.setState({vgreview: e.target.value})
  }
  handleRatingInput(e){
    this.setState({vgrating: e.target.value})
  }
  addVideoGame(){
    axios.post('/api/videogames', {image: this.state.vgimage, title:this.state.vgtitle, review: this.state.vgreview, rating: this.state.vgrating})
    .then(res => {
      this.setState({favVideoGames: res.data})
    }).catch(err => {
      console.log('error from server', err)
    })
  }
  deleteVideoGame(id){
    axios.delete(`/api/videogames/${id}`).then(res => {
      this.setState({favVideoGames: res.data})
    }).catch(err => console.log('error', err))
  }
  editVideoGame(id, videogame){
    axios.put(`/api/videogames/${id}`, videogame).then(res => {
      this.setState({favVideoGames: res.data})
    }).catch(err => console.log('error', err))
  }
  
  render(){
    console.log(this.state.favVideoGames)
    return (
      <div className="App">
        <Header/>
        <div className="App-Body-Container">
        <div className="Inputs-Container">
          <h3>Add a New Game</h3>
          <input className="imageInput" placeholder="Image URL" onChange={this.handleImageInput}/>
          <input className="titleInput" placeholder="Video Game Title" onChange={this.handleTitleInput}/>
          <textarea id="Review-Input"className="reviewInput" placeholder="Your Review" onChange={this.handleReviewInput}/>
          <input className="ratingInput" placeholder="Your Rating" onChange={this.handleRatingInput}/>
          <button id="Add-Game"className="addGame" onClick={this.addVideoGame}>Add Video Game</button>
        </div>
        <div className="Videogame-Container">
        <VideogameList videogames={this.state.favVideoGames}
          deletegame={this.deleteVideoGame}
          editgame={this.editVideoGame}
          setEdit={this.setEdit}
        />
        </div>
        
        </div>
      </div>
    )
  }
}
export default App;
