import React, {Component} from 'react'
import './videogame.css'

class Videogame extends Component{
    constructor(props){
        super()
        this.state = {
            edit: false,
            review: '',
            rating:''
        }
        this.flipEdit = this.flipEdit.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    flipEdit(){
        this.setState({edit: !this.state.edit})
    }
    saveChanges(){
        this.flipEdit()
        //this.props.setEdit(this.props.id)
        let {review, rating} = this.state
        let newVideogame = {
            review,
            rating
        }
        this.props.edit(this.props.id, newVideogame)//work on this
    }
    handleChange(e){
        const {value , name} = e.target
        this.setState({[name]: value})
        //this.setState({review: e.target.value})
    }

    render(){
        let {edit, review, rating} = this.state
        return(
            <div className="Display-Container">
                <img className="Display-Pic"src={this.props.image} alt=""/>
                <h2 className="Display-Title">Title: {this.props.title}</h2>
                {edit ? (<div> <input value={review} name="review"onChange={this.handleChange} placeholder="review"/> 
                <input value={rating} name="rating"onChange={this.handleChange} placeholder="rating"/> </div>)
                 : 
                 (<div> <p>Review: {this.props.review}</p>
                 <p>Rating: {this.props.rating}</p> </div>)}

                {edit ? (<button onClick={() => this.saveChanges()}>Save Changes</button>)
                 : 
                 (<button onClick={() => this.flipEdit()}>Edit</button>)}
                
                
                <button className="deleteGame" onClick={() => this.props.delete(this.props.id)}>Delete</button>
            </div>
        )
    }
}
export default Videogame