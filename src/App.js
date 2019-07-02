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
    //all of the bound
    this.handleImageInput = this.handleImageInput.bind(this)
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleReviewInput = this.handleReviewInput.bind(this)
    this.handleRatingInput = this.handleRatingInput.bind(this)
    this.addVideoGame = this.addVideoGame.bind(this)
    this.deleteVideoGame = this.deleteVideoGame.bind(this)
    this.editVideoGame = this.editVideoGame.bind(this)
  }
  //below function renders site
  componentDidMount(){
    axios.get('/api/videogames').then(res => {
      this.setState({favVideoGames: res.data})
    }).catch(err => {
      console.log('error from server', err)
    })
    console.log(this.state.favVideoGames)
  }
  //handle function for whenever user types in image input field
  handleImageInput(e){
    this.setState({vgimage: e.target.value})
  }
  //handle function for whenever user types in title input field
  handleTitleInput(e){
    this.setState({vgtitle: e.target.value})
  }
  //handle function for whenever user types in review textarea field
  handleReviewInput(e){
    this.setState({vgreview: e.target.value})
  }
  //handle function for whenever user types in rating input field
  handleRatingInput(e){
    this.setState({vgrating: e.target.value})
  }
  //function to allow user to add video game to list of games
  addVideoGame(){
    axios.post('/api/videogames', {image: this.state.vgimage, title:this.state.vgtitle, review: this.state.vgreview, rating: this.state.vgrating})
    .then(res => {
      this.setState({favVideoGames: res.data, vgimage:'',vgtitle:'',vgreview:'',vgrating:''})
    }).catch(err => {
      console.log('error from server', err)
    })

  }
  //function to allow user to remove game from list
  deleteVideoGame(id){
    axios.delete(`/api/videogames/${id}`).then(res => {
      this.setState({favVideoGames: res.data})
    }).catch(err => console.log('error', err))
  }
  //function to allow user to edit a video game on the list
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
          <input className="imageInput" value={this.state.vgimage} placeholder="Image URL" onChange={this.handleImageInput}/>
          <input className="titleInput" value={this.state.vgtitle} placeholder="Video Game Title" onChange={this.handleTitleInput}/>
          <textarea id="Review-Input"className="reviewInput" value={this.state.vgreview} placeholder="Your Review" onChange={this.handleReviewInput}/>
          <input className="ratingInput" placeholder="Your Rating" value={this.state.vgrating} onChange={this.handleRatingInput}/>
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
