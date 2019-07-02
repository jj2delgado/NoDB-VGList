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
    //function that toggles edit value to allow certain buttons to be rendered
    flipEdit(){
        this.setState({edit: !this.state.edit})
    }
    //function that allows user to submit their edit to back end server
    saveChanges(){
        this.flipEdit()
        //this.props.setEdit(this.props.id)
        let {review, rating} = this.state
        let newVideogame = {
            review,
            rating
        }
        this.props.edit(this.props.id, newVideogame)
        this.setState({review: '', rating: ''})
    }
    //handle change function to save user input values on review and rating input fields
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
                {/*  Edit will always default to false, if user clicks edit button will change edit to true
                if edit is true this will render 2 new buttons and allow user to edit their review and rating of the selected game*/}
                {edit ? (<div> <textarea className="Edit-Review"value={review} name="review"onChange={this.handleChange} placeholder="Review"/> 
                <input className="Edit-Rating"value={rating} name="rating"onChange={this.handleChange} placeholder="Rating"/> </div>)
                 : 
                 (<div> <p>Review: {this.props.review}</p>
                 <p>Rating: {this.props.rating}</p> </div>)}
                    
                    {/* if edit is true save changes button will render and cancel edit button */}
                {edit ? (<div> <button onClick={() => this.saveChanges()}>Save Changes</button> <button onClick={() => this.flipEdit()}>Cancel Edit</button> </div>)
                 : 
                 (<button onClick={() => this.flipEdit()}>Edit</button>)}
                
                    {/* always show delete button regardless of edit value */}
                <button className="deleteGame" onClick={() => this.props.delete(this.props.id)}>Delete</button>
            </div>
        )
    }
}
export default Videogame