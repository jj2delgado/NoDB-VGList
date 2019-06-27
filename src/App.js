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
      vgimage: '',
      vgtitle: '',
      vgreview: '',
      vgrating: ''
    }
    this.handleImageInput = this.handleImageInput.bind(this)
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleReviewInput = this.handleReviewInput.bind(this)
    this.handleRatingInput = this.handleRatingInput.bind(this)
    this.addVideoGame = this.addVideoGame.bind(this)
    this.deleteVideoGame = this.deleteVideoGame.bind(this)
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
  editVideoGame(id, review, rating){
    axios.put(`/api/videogames/${id}?review=${review}rating=${rating}`).then(res => {
      this.setState({favVideoGames: res.data})
    }).catch(err => console.log('error', err))
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <VideogameList videogames={this.state.favVideoGames}
          deletegame={this.deleteVideoGame}
          editgame={this.editVideoGame}
        />
        <div>
          <input className="imageInput" placeholder="Image URL" onChange={this.handleImageInput}/>
          <input className="titleInput" placeholder="Video Game Title" onChange={this.handleTitleInput}/>
          <input className="reviewInput" placeholder="Your Review" onChange={this.handleReviewInput}/>
          <input className="ratingInput" placeholder="Your Rating" onChange={this.handleRatingInput}/>
        </div>
        <div>
          <button className="addGame" onClick={this.addVideoGame}>Add Video Game</button>
        </div>
      </div>
    )
  }
  
}

export default App;
